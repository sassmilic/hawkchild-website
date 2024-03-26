import React from "react";

const rowTemplate = (item, index, rowHeight, idMap) => {
  const filename = item[0];
  const file = item[1];
  const isVideo = filename.endsWith(".mp4");
  const specificId =
    idMap && idMap[filename] ? idMap[filename] : `element-${index}`; // Fixed key to filename
  return (
    <div className="row" key={index} style={{ height: `${rowHeight}px` }}>
      {isVideo ? (
        <video
          key={filename}
          id={specificId}
          src={file}
          alt={`content ${index}`}
          loop
          autoPlay
          muted
        />
      ) : (
        <img
          key={filename}
          id={specificId}
          src={file}
          alt={`content ${index}`}
          loading="eager"
        />
      )}
    </div>
  );
};

export default rowTemplate;
