import React from 'react';
import './Table.css';

const Table = ({ data, onSort, sortConfig }) => {
    const getSortIndicator = (columnKey) => {
        if (sortConfig.key === columnKey) {
            return sortConfig.direction === 'ascending' ? 'sort-ascending' : 'sort-descending';
        }
        return '';
    };

    return (
        <table>
        <thead>
            <tr>
                <th onClick={() => onSort('event')}>
                    Event
                    <span className={`sort-indicator ${getSortIndicator('event')}`}></span>
                </th>
                <th onClick={() => onSort('artist')}>Artist(s) <span className={`sort-indicator ${getSortIndicator('artist')}`}></span></th>
                <th onClick={() => onSort('date')}>Date <span className={`sort-indicator ${getSortIndicator('date')}`}></span></th>
                <th onClick={() => onSort('location')}>Location <span className={`sort-indicator ${getSortIndicator('location')}`}></span></th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
            <tr key={index}>
                <td>{item.event}</td>
                <td>{item.artist}</td>
                <td>{item.date}</td>
                <td>{item.location}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default Table;

