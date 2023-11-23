import React, { useState } from 'react';
import Table from './../components/Table';
import './Events.css';

let data = require('./../data/eventData.json');

const Events = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });

    const sortedData = data.sort((a, b) => {
        if (sortConfig.direction === 'ascending') {
            return a[sortConfig.key].localeCompare(b[sortConfig.key]);
        } else {
            return b[sortConfig.key].localeCompare(a[sortConfig.key]);
        }
    });
    const [tableData, setTableData] = useState(sortedData);

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
            <Table data={tableData} onSort={onSort} sortConfig={sortConfig} />
        </div>
    );
};

export default Events;

