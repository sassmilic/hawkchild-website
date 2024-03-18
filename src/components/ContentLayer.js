import React, { useState, useRef, useEffect } from "react";
import "./ContentLayer.css";

const setInitialState = ({ rowHeight, images }) => {
  // NOTE: Everything in terms of pixels.
  const tol = 1; // tolerance
  const viewportHeight = window.innerHeight;
  const totalHeight = images.length * (rowHeight / 100) * window.innerWidth;
  const toleranceHeight = tol * (rowHeight / 100) * window.innerWidth; // TODO: parameterize tolerance
  const bufferHeight = viewportHeight + 2 * toleranceHeight;
  const bufferedItems = Math.floor(viewportHeight / rowHeight) + 2 * tol;
  const itemsAbove = 0;
  const topPaddingHeight = itemsAbove * rowHeight;
  const bottomPaddingHeight = totalHeight - bufferHeight - topPaddingHeight;
  const initialPosition = topPaddingHeight + toleranceHeight; // TODO: incorrect; should be 0

  return {
    topPaddingHeight,
    bottomPaddingHeight,
    initialPosition, // TODO: smells fishy
    data: [],
  };
};

function ContentLayer(props) {
  const { className, images, idMap, rowHeight, speed, scrollPosition, viewportSize } =
    props;

  const sortOrder = (a, b) => {
    const comparison = a[0].localeCompare(b[0], undefined, {
      numeric: true,
      sensitivity: "base",
    });
    return speed < 0 ? -comparison : comparison;
  };

  const sortedImages = Object.entries(images).sort(sortOrder);

  const [state, setState] = useState(() =>
    setInitialState({ rowHeight, images }),
  );

  const getData = (offset, limit) => {
    console.log("offset:", offset, "limit:", limit);
    console.log(sortedImages.slice(offset, offset + limit));
    return sortedImages.slice(offset, offset + limit);
  };

  const rowTemplate = (item, index) => {
    const filename = item[0];
    const files = item[1];
    const isVideo = filename.endsWith(".mp4");
    const specificId = idMap && idMap[filename] ? idMap[key] : `element-${index}`;
    return (
      <div className="item" key={index}>
        {isVideo ? (
          <video
            key={filename}
            id={specificId}
            src={files.full}
            alt={`content ${index}`}
            loop
            autoPlay
            muted
          />
        ) : (
          <img
            key={filename}
            id={specificId}
            src={files.full}
            alt={`content ${index}`}
          />
        )}
      </div>
    );
  };

  const runScroller = ({ target: { scrollTop } }) => {
    const { rowHeight } = state;
    const index = Math.floor((scrollPosition - state.toleranceHeight) / rowHeight);
    const data = getData(index, 2); // TODO: compute exact value, not just 2
    console.log(data);
    const topPaddingHeight = Math.max(index * rowHeight, 0);
    const bottomPaddingHeight = Math.max(
      state.totalHeight - topPaddingHeight - data.length * rowHeight,
      0,
    );

    setState((prevState) => ({
      ...prevState,
      topPaddingHeight,
      bottomPaddingHeight,
      data,
    }));
  };

  const calculatePaddingHeights = () => {
    const tol = 1; // tolerance
    const viewportHeight = window.innerHeight;
    const totalHeight = images.length * (rowHeight / 100) * window.innerWidth;
    const toleranceHeight = tol * (rowHeight / 100) * window.innerWidth; // TODO: parameterize tolerance
    const bufferHeight = viewportHeight + 2 * toleranceHeight;
    const bufferedItems = Math.floor(viewportHeight / rowHeight) + 2 * tol;
    const itemsAbove = 0;
    const topPaddingHeight = itemsAbove * rowHeight;
    const bottomPaddingHeight = totalHeight - bufferHeight - topPaddingHeight;
    const initialPosition = topPaddingHeight + toleranceHeight; // TODO: incorrect; should be 0

    const topHeight = `${scrollPosition * 0.5}px`; // Example calculation
    const bottomHeight = `${viewportSize.height * 0.1}px`; // Example calculation
    return { topHeight, bottomHeight };
  };

  useEffect(() => {
    const { topHeight, bottomHeight } = calculatePaddingHeights();
    const index = Math.floor((scrollPosition - state.toleranceHeight) / rowHeight);
    // data also potentially changes
    const data = getData(0, 2); // TODO: compute exact value, not just 2
    console.log(data);
    setState((prevState) => ({
      ...prevState,
      data: data,
      topPaddingHeight: topHeight,
      bottomPaddingHeight: bottomHeight,
    }));
  }, [scrollPosition, viewportSize]);

  return (
    <div className={`content-layer ${className}`}>
      <div style={{ height: state.topPaddingHeight }}></div>
      {state.data.map((item, index) => rowTemplate(item, index))}
      <div style={{ height: state.bottomPaddingHeight }}></div>
    </div>
  );
}

export default ContentLayer;
