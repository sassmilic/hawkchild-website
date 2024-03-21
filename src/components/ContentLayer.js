import React, { useState, useRef, useEffect } from "react";
import rowTemplate from "./RowTemplate";
import "./ContentLayer.css";

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
    // NOTE: Everything in terms of pixels.
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const rowHeightPx = computeRowHeightInPixels(rowHeight);
    const viewportHeight = window.innerHeight;
    const totalHeight = sortedImages.length * (rowHeight / 100) * window.innerWidth;
    const toleranceHeight = tolerance * (rowHeight / 100) * window.innerWidth; // TODO: parameterize tolerance
    const bufferHeight = viewportHeight + 2 * toleranceHeight;
    const bufferedItems = Math.floor(viewportHeight / rowHeight) + 2 * tolerance;
    const itemsAbove = 0;
    const topPaddingHeight = itemsAbove * rowHeight;
    const bottomPaddingHeight = totalHeight - bufferHeight - topPaddingHeight;
    const initialPosition = topPaddingHeight + toleranceHeight; // TODO: incorrect; should be 0

    return {
      rowHeightPx,
      topPaddingHeight,
      bottomPaddingHeight,
      toleranceHeight,
      initialPosition, // TODO: smells fishy
      data: [],
    };
  };

  const [state, setState] = useState(() =>
    setInitialState({ rowHeight, sortedImages }),
  );

  useEffect(() => {
    console.log("Viewport Height (vh):", window.innerHeight);
    console.log("Viewport Width (vw):", window.innerWidth);

    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const rowHeightPx = computeRowHeightInPixels(rowHeight);
    console.log("Row Height in Pixels (rowHeightPx):", rowHeightPx);

    console.log("Images:", sortedImages);
    console.log("Type of `sortedImages`:", typeof sortedImages)
    console.log("Size of Images:", Object.keys(sortedImages).length);
    const totalHeight = Object.keys(sortedImages).length * rowHeightPx;
    console.log("Total Height (totalHeight):", totalHeight);

    // the rows/images currently visible
    const amount = Math.ceil(vh / rowHeightPx);
    console.log("Amount (amount):", amount);

    const tolTop = Math.min(tolerance, Math.floor(scrollTop / rowHeightPx));
    console.log("Tolerance Top (tolTop):", tolTop);

    console.log("Scroll position:", scrollTop);

    const startIndex = Math.floor(Math.max(0, scrollTop - tolTop * rowHeightPx) / rowHeightPx);
    console.log("Start Index (startIndex):", startIndex);

    // how many items will be virtualized above (pcs)
    const itemsAbove = startIndex;
    console.log("Items Above (itemsAbove):", itemsAbove);

    const topPaddingHeight = itemsAbove * rowHeightPx;

    //const tolBot = Math.min(tolerance, Math.floor((totalHeight - scrollTop) / rowHeightPx));
    const tolBot = Math.min(tolerance, Math.floor((totalHeight - scrollTop - vh) / rowHeightPx));
    console.log("Tolerance Bottom (tolBot):", tolBot);
    const tolHeight = (tolTop + tolBot) * rowHeightPx;
    console.log("Tolerance Height (tolHeight):", tolHeight);

    const bufferedItems = amount + tolTop + tolBot;
    console.log("Buffered Items (bufferedItems):", bufferedItems);
    const bottomPaddingHeight =
      totalHeight - (topPaddingHeight + bufferedItems * rowHeightPx);
    console.log("Top Padding Height (topPaddingHeight):", topPaddingHeight);
    console.log(
      "Bottom Padding Height (bottomPaddingHeight):",
      bottomPaddingHeight,
    );

    const data = sortedImages.slice(startIndex, startIndex + bufferedItems);
    console.log("Data Slice (data):", data);

    const condition = totalHeight == (topPaddingHeight + bufferedItems * rowHeightPx + bottomPaddingHeight);
   
    console.log(totalHeight);
    console.log(topPaddingHeight, bufferedItems, rowHeightPx, bottomPaddingHeight);
    if (!condition) {
        throw new Error("Length mismatch");
    }

    setState((prevState) => ({
      ...prevState,
      rowHeightPx: rowHeightPx,
      data: data,
      topPaddingHeight: topPaddingHeight,
      bottomPaddingHeight: bottomPaddingHeight,
    }));
  }, [scrollTop, viewportSize]);

  return (
    <div className={`content-layer ${className}`}>
      <div id="top-padding" style={{ height: state.topPaddingHeight }}></div>
      {state.data.map((item, index) => rowTemplate(item, index, state.rowHeightPx, idMap))}
      <div
        id="bottom-padding"
        style={{ height: state.bottomPaddingHeight }}
      ></div>
    </div>
  );
}

export default ContentLayer;
