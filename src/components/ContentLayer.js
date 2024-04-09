import React, { useState, useRef, useEffect } from "react";
import rowTemplate from "./RowTemplate";
import "./ContentLayer.css";

function modularSlice(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j > array.length) {
        throw new Error("Indices are out of bounds.");
    }
    if (i < j) {
        return array.slice(i, j);
    } else {
        const n = array.length;
        //return array.slice(0, j).concat(array.slice(i, n))
        return array.slice(i, n).concat(array.slice(0, j));
    }
}

function ContentLayer(props) {
  const {
    className,
    images,
    idMap,
    rowHeight, // units: vw
    speed,
    tolerance,
    scrollTop,
    viewportSize,
  } = props;

  // sort images by filename
  const sortOrder = (a, b) => {
    const comparison = a[0].localeCompare(b[0], undefined, {
      numeric: true,
      sensitivity: "base",
    });
    return speed < 0 ? -comparison : comparison;
  };
  //const sortedImages = Object.entries(images).sort(sortOrder);
  const sortedImages = Object.entries(images).sort(sortOrder);

  const computeRowHeightInPixels = () => {
    return (rowHeight / 100) * window.innerWidth;
  };

  const setInitialState = ({ rowHeight, sortedImages }) => {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const rowHeightPx = computeRowHeightInPixels(rowHeight);
    const viewportHeight = window.innerHeight;
    const totalHeight =
      sortedImages.length * (rowHeight / 100) * window.innerWidth;
    const toleranceHeight = tolerance * (rowHeight / 100) * window.innerWidth; // TODO: parameterize tolerance
    const bufferHeight = viewportHeight + 2 * toleranceHeight;
    const bufferedItems =
      Math.floor(viewportHeight / rowHeight) + 2 * tolerance;
    const itemsAbove = 0;
    const topPaddingHeight = itemsAbove * rowHeight;
    const initialPosition = topPaddingHeight + toleranceHeight; // TODO: incorrect; should be 0

    return {
      rowHeightPx,
      topPaddingHeight,
      toleranceHeight,
      initialPosition, // TODO: smells fishy
      data: [],
    };
  };

  const [state, setState] = useState(() =>
    setInitialState({ rowHeight, sortedImages }),
  );

  const contentLayerRef = useRef(null);

  useEffect(() => {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const rowHeightPx = computeRowHeightInPixels(rowHeight);
    const amount = Math.ceil(vh / rowHeightPx);
    const n = sortedImages.length;
    // how many items will be virtualized above (pcs)
    const itemsAbove = Math.floor(Math.max(0, scrollTop - tolerance * rowHeightPx) / rowHeightPx);
    const startIndex = itemsAbove % n;
    const topPaddingHeight = itemsAbove * rowHeightPx;
    const tolHeight = 2 * tolerance * rowHeightPx;

    const bufferedItems = amount + 2 * tolerance;

    const [i, j] = [startIndex, (startIndex + bufferedItems) % n];
    console.log("Indices: (i, j)", i, j)
    const data = modularSlice(sortedImages, i, j);
    console.log("Data:", data)

    console.log("Row Height in Pixels (rowHeightPx):", rowHeightPx);
    console.log("Images:", sortedImages);
    console.log("Type of `sortedImages`:", typeof sortedImages);
    console.log("Size of Images:", Object.keys(sortedImages).length);
    console.log("Amount (amount):", amount);
    console.log("Scroll position:", scrollTop);
    console.log("Start Index (startIndex):", startIndex);
    console.log("Items Above (itemsAbove):", itemsAbove);
    console.log("Tolerance Height (tolHeight):", tolHeight);
    console.log("Buffered Items (bufferedItems):", bufferedItems);
    console.log("Top Padding Height (topPaddingHeight):", topPaddingHeight);
    console.log("Data Slice (data):", data);

    setState((prevState) => ({
      ...prevState,
      rowHeightPx: rowHeightPx,
      data: data,
      topPaddingHeight: topPaddingHeight,
    }));
  }, [scrollTop, viewportSize]); // TODO: seperate these two

  return (
    <div className={`content-layer ${className}`} ref={contentLayerRef}>
      <div id="top-padding" style={{ height: state.topPaddingHeight }}></div>
      {state.data.map((item, index) =>
        rowTemplate(item, index, state.rowHeightPx, idMap),
      )}
    </div>
  );
}

export default ContentLayer;
