import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ data, onSort, sortConfig }) => {
  const getSortIndicator = (columnKey) => {
    if (sortConfig.key === columnKey) {
      return sortConfig.direction === "ascending"
        ? "sort-ascending"
        : "sort-descending";
    }
    return "";
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("date")}>
            <div className="table-header-cell">
              Date
              <span
                className={`sort-indicator ${getSortIndicator("date")}`}
              ></span>
            </div>
          </th>
          <th onClick={() => onSort("event")}>
            <div className="table-header-cell">
              Event
              <span
                className={`sort-indicator ${getSortIndicator("event")}`}
              ></span>
            </div>
          </th>
          <th onClick={() => onSort("artist")}>
            <div className="table-header-cell">
              Artist(s)
              <span
                className={`sort-indicator ${getSortIndicator("artist")}`}
              ></span>
            </div>
          </th>
          <th onClick={() => onSort("location")}>
            <div className="table-header-cell">
              Location
              <span
                className={`sort-indicator ${getSortIndicator("location")}`}
              ></span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) &&
          data.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                window.open(item.url, "_blank");
              }}
            >
              <td>{item.date}</td>
              <td>{item.event}</td>
              <td>{item.artist}</td>
              <td>{item.location}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sortConfig: PropTypes.shape({
    key: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(["ascending", "descending"]).isRequired,
  }).isRequired,
};

export default Table;
