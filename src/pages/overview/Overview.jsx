import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Select from "../../components/select/Select";
import Table from "../../components/table/Table";
import { defaultPagination } from "../../utils/constants";
import styles from "./Overview.module.scss";

const statsData = [
  {
    title: "Daily Transaction Volume",
    value: "2,342",
  },
  {
    title: "Daily Transaction Volume",
    value: "$2,342",
  },
  {
    title: "Total Transaction Volume",
    value: "454,000",
  },
  {
    title: "Total Transaction Volume",
    value: "$400,000",
  },
];

export const statusRender = (status) => {
  switch (status) {
    case "Reconcilled":
      return (
        <span className={[styles.status, styles.reconcille].join(" ")}>
          Reconcilled
        </span>
      );
    case "Unreconcilled":
      return (
        <span className={[styles.status, styles.unreconcille].join(" ")}>
          Unreconcilled
        </span>
      );
    case "Settled":
      return (
        <span className={[styles.status, styles.settled].join(" ")}>
          Settled
        </span>
      );
    case "Unsettled":
      return (
        <span className={[styles.status, styles.unsettled].join(" ")}>
          Unsettled
        </span>
      );
    default:
      return (
        <span className={[styles.status].join(" ")}>{status || "N/A"}</span>
      );
  }
};

const columns = [
  {
    title: "Item Type",
    dataIndex: "item",
    key: "item",
    render: (_, { item }) => {
      return (
        <div className={styles["item-type"]}>
          <div className={styles.initials}>VW</div>
          <p>{item}</p>
        </div>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Transaction No",
    dataIndex: "transactionNo",
    key: "transactionNo",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      return statusRender(status);
    },
  },
  {
    title: "",
    render: () => <img src="icons/arrow.svg" alt="arrow" />,
  },
];

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Reconcilled",
    value: "reconcilled",
  },
  {
    label: "Un-reconcilled",
    value: "un-reconcilled",
  },
  {
    label: "Settled",
    value: "settled",
  },
  {
    label: "Unsettled",
    value: "unsettled",
  },
];

const tableData = [
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconcilled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Unreconcilled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Settled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Unsettled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconcilled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Unreconcilled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Settled",
  },
  {
    item: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Unsettled",
  },
];

function Overview() {
  const [status, setStatus] = useState({
    label: "All",
    value: "all",
  });

  const handleOnselect = (value) => {
    const _selectedStatus = filterOptions.find(
      (_status) => _status.value === value
    )?.label;

    setStatus(
      {
        label: _selectedStatus,
        value,
      } || null
    );
  };

  return (
    <Layout>
      <main className={styles.content}>
        <div className={`${styles.stats_wrapper}`}>
          {statsData.map((data, index) => {
            return (
              <div key={index} className={`${styles.stats} flex`}>
                <div className={styles.description}>
                  <p className={styles.title}>{data.title}</p>
                  <p className={styles.value}>{data.value}</p>
                </div>
                <img src="./icons/small-chart.svg" alt="chart" />
              </div>
            );
          })}
        </div>
        <div className={styles.full_stats}>
          <div className={styles.stats_data}>
            <div className="flex">
              <strong className={[styles.date, "gray"].join(" ")}>
                Today: 5, Aug 2018
              </strong>
              <div className={styles.navigation_btn}>
                <img src="./icons/left-button.svg" alt="left arrow" />
                <img src="./icons/right-button.svg" alt="right arrow" />
              </div>
            </div>
            <img
              className={styles.full_stats_img}
              src="./icons/full-stat.svg"
              alt="statistics"
            />
          </div>

          <ul>
            <li className={styles.stats_detail}>
              <p className={styles.title}>Orders</p>
              <img src="./icons/stats-line.svg" alt="statistics" />
              <p>
                Pending Orders: <strong style={{ color: "#FDC203" }}>20</strong>
              </p>
              <p>
                Reconcilled Orders:{" "}
                <strong style={{ color: "#27AE60" }}>80</strong>
              </p>
              <p>
                Total Orders: <strong style={{ color: "#1875F0" }}>100</strong>
              </p>
            </li>
            <li className={styles.stats_detail}>
              <p className={styles.title}>Payments</p>
              <img src="./icons/stats-line.svg" alt="statistics" />
              <p>
                Pending Payments:{" "}
                <strong style={{ color: "#FDC203" }}>20</strong>
              </p>
              <p>
                Reconcilled Payments:{" "}
                <strong style={{ color: "#27AE60" }}>80</strong>
              </p>
              <p>
                Total Payments:{" "}
                <strong style={{ color: "#1875F0" }}>100</strong>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p className="title">Payments</p>
          <div className="flex center-align between">
            <p className="black">
              Showing <span style={{ color: "#1875F0" }}>20</span> out of 500
              payments
            </p>

            <div className={styles.search_container}>
              <label htmlFor="nav-input">
                <img src="./icons/search.svg" alt="logo" />
              </label>
              <input
                placeholder="Search Payments"
                type="text"
                className={styles.input}
                id="nav-input"
              />
            </div>
            <Select
              value={status.value}
              options={filterOptions}
              onSelect={(value) => handleOnselect(value)}
              placeholder="All"
            />
          </div>
        </div>
        {
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{ ...defaultPagination, page: 4, total: 100 }}
          />
        }
      </main>
    </Layout>
  );
}

export default Overview;
