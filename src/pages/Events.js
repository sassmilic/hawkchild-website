import React, { useState, useEffect } from "react";
import Table from "./../components/Table";
import "./Events.css";

let data = require("./../data/eventData.json");

const Events = () => {
  const [upcomingSortConfig, setUpcomingSortConfig] = useState({
    key: "date",
    direction: "descending",
  });
  const [pastSortConfig, setPastSortConfig] = useState({
    key: "date",
    direction: "descending",
  });
  const [upcomingTableData, setUpcomingTableData] = useState([]);
  const [pastTableData, setPastTableData] = useState([]);

  const sortData = (data, { key, direction }) => {
    return [...data].sort((a, b) => {
      return direction === "ascending"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
  };

  useEffect(() => {
    const upcomingData = sortData(
      data.filter((event) => event.upcoming === "true"),
      upcomingSortConfig,
    );
    setUpcomingTableData(upcomingData);

    const pastData = sortData(
      data.filter((event) => event.upcoming !== "true"),
      pastSortConfig,
    );
    setPastTableData(pastData);
  }, [upcomingSortConfig, pastSortConfig]); // Add both sort configs to the dependency array

  const onSort = (key, isUpcoming) => {
    let direction = "ascending";
    let currentSortConfig = isUpcoming ? upcomingSortConfig : pastSortConfig;

    if (
      currentSortConfig.key === key &&
      currentSortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const newSortConfig = { key, direction };

    if (isUpcoming) {
      setUpcomingSortConfig(newSortConfig);
      // No need to call setUpcomingTableData here since it will be called by useEffect when upcomingSortConfig changes
    } else {
      setPastSortConfig(newSortConfig);
      // No need to call setPastTableData here since it will be called by useEffect when pastSortConfig changes
    }
  };

  return (
    <div className="event-page-container">
      <h1>events</h1>
      <h2>upcoming</h2>
      <div className="spreadsheet-container">
        <Table
          data={upcomingTableData}
          onSort={(key) => onSort(key, true)}
          sortConfig={upcomingSortConfig}
        />
      </div>
      <h2>past</h2>
      <div className="spreadsheet-container">
        <Table
          data={pastTableData}
          onSort={(key) => onSort(key, false)}
          sortConfig={pastSortConfig}
        />
      </div>
    </div>
  );
};

export default Events;
