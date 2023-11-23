import React, { useState, useEffect } from 'react';
import Table from './../components/Table';
import './Events.css';

let data = require('./../data/eventData.json');

const Events = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });
    const [tableData, setTableData] = useState([]);

    const sortData = (data, { key, direction }) => {
        return [...data].sort((a, b) => {
          return direction === 'ascending' ? 
                 a[key].localeCompare(b[key]) : 
                 b[key].localeCompare(a[key]);
        });
    };

    useEffect(() => {
        // Sort data initially when the component mounts
        const sortedData = sortData(data, sortConfig);
        setTableData(sortedData);
    }, []); 


    const onSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        const newSortConfig = { key, direction };
        setSortConfig(newSortConfig);
        setTableData(sortData(tableData, newSortConfig));
    };

    return (
        <div className="event-page-container">
            <div className="spreadsheet-container">
                <Table data={tableData} onSort={onSort} sortConfig={sortConfig} />
            </div>
        </div>
    );
};

export default Events;

