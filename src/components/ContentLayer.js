import React, { Component } from 'react';
import './ContentLayer.css';

class ContentLayer extends Component {
  constructor(props) {
    super(props);
    this.state = setInitialState(props.rowHeight, props.rowWidth);
    this.columnElement = React.createRef();
  }

  setInitialState = ({ rowHeight, rowWidth }) => {
    // height of visible viewport (vh)
    const viewportHeight = 100;
    // total height of rendered and virtualized items (vw)
    const totalHeight = this.props.images.length * rowHeight;
    // single outlet height (there is outlet on top and bottom) (vw)
    const toleranceHeight = 1 * rowHeight; // Additional items rendered but invisible to user
    // all rendered rows height, visible rows + invisible outlets
    const bufferHeight = viewportHeight + 2 * toleranceHeight;
    // number of items to be rendered (pcs)
    const bufferedItems = viewportHeight / rowHeight + 2 * 1; // TODO: check if this works
    // how many items will be virtualized above (pcs)
    const itemsAbove = 0;
    // initial height of the top padding element
    const topPaddingHeight = itemsAbove * rowHeight;
    // initial height of the bottom padding element
    const bottomPaddingHeight = totalHeight - bufferHeight - topPaddingHeight;
    // initial scroll position
    const initialPosition = topPaddingHeight + toleranceHeight;

    return {
      viewportHeight,
      totalHeight,
      toleranceHeight,
      bufferHeight,
      bufferedItems,
      topPaddingHeight,
      bottomPaddingHeight,
      initialPosition,
      data: []
    };
  };

  getData = (offset, limit) => {
    return this.props.images.slice(offset, offset + limit);
  };

  rowTemplate = (item, index) => {
    const { key, value } = item;
    const isVideo = key.endsWith('.mp4');
    const specificId = this.props.idMap && this.props.idMap[key] ? this.props.idMap[key] : `element-${index}`;
    return (
      <div className="item" key={index}>
        {isVideo ? (
          <video key={index} id={specificId} src={value.full} alt={`content ${index}`} loop autoPlay muted />
        ) : (
          <img key={index} id={specificId} src={value.full} alt={`content ${index}`} />
        )}
      </div>
    );
  };

  sortOrder = (a, b) => {
    const comparison = a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: 'base' });
    return this.props.speed < 0 ? -comparison : comparison;
  };

    runScroller = ({ target: { scrollTop } }) => {
      const { totalHeight, toleranceHeight, bufferedItems } = this.state
      const index = Math.floor((scrollTop - toleranceHeight) / itemHeight)
      const data = this.props.get(index, bufferedItems)
      const topPaddingHeight = Math.max((index - minIndex) * itemHeight, 0)
      const bottomPaddingHeight = Math.max(totalHeight - topPaddingHeight - data.length * itemHeight, 0)

      this.setState({
        topPaddingHeight,
        bottomPaddingHeight,
        data
      })
    }

  render() {
    const { className } = this.props;
    const { topPaddingHeight, bottomPaddingHeight, data } = this.state;
    const sortedImages = Object.entries(this.props.images).sort(this.sortOrder);

    return (
      <div
        className={`content-layer ${className}`}
        ref={this.columnElement}
        onScroll={this.runScroller}
      >
        <div style={{ height: topPaddingHeight }}></div>
        {data.map((item, index) => this.rowTemplate(item, index))}
        <div style={{ height: bottomPaddingHeight }}></div>
      </div>
    );
  }
}

export default ContentLayer;

