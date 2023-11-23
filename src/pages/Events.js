import React, { useState } from 'react';
import Table from './../components/Table';
import './Events.css';

let data = require('./../data/eventData.json');

const Events = () => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const onSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...tableData].sort((a, b) => {
      if (direction === 'ascending') {
        return a[key].localeCompare(b[key]);
      } else {
        return b[key].localeCompare(a[key]);
      }
    });

    setTableData(sortedData);
  };

  return (
    <div className="spreadsheet-container">
      <h2>Event Spreadsheet</h2>
      <Table data={tableData} onSort={onSort} sortConfig={sortConfig} />
    </div>
  );
};

export default Events;
