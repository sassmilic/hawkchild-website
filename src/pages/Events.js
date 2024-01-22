import React, { useState, useEffect } from 'react';
import Table from './../components/Table';
import './Events.css';

let data = require('./../data/eventData.json');

const Events = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });
    const [showUpcoming, setShowUpcoming] = useState(data.some(event => event.upcoming === "true"));
    const [tableData, setTableData] = useState([]);

    const sortData = (data, { key, direction }) => {
        return [...data].sort((a, b) => {
          return direction === 'ascending' ? 
                 a[key].localeCompare(b[key]) : 
                 b[key].localeCompare(a[key]);
        });
    };
    // Sort data initially when the component mounts
    useEffect(() => {
        const sortedData = sortData(data, sortConfig);
        setTableData(sortedData);
    }, []); 

    useEffect(() => {
        const filteredData = showUpcoming 
            ? data.filter(event => event.upcoming === "true") 
            : data.filter(event => event.upcoming !== "true");
        const sortedData = sortData(filteredData, sortConfig);
        setTableData(sortedData);
    }, [showUpcoming, sortConfig]); 

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
            <div className="buttons">
                <button onClick={() => setShowUpcoming(true)}
                    className={showUpcoming ? "button-selected" : ""}>
                    {showUpcoming ? "Upcoming Events" : "Upcoming Events"}
                </button>
                <button onClick={() => setShowUpcoming(false)}
                    className={!showUpcoming ? "button-selected" : ""}>
                    {!showUpcoming ? "Past Events" : "Past Events"}
                </button>
            </div>
            <div className="spreadsheet-container">
                <Table data={tableData} onSort={onSort} sortConfig={sortConfig} />
            </div>
        </div>
    );
};

export default Events;

