import React from "react";
import styles from "./transactions.module.css";

const { transactionHistory } = styles;


export const Table = ({ children }) =>  <table className={transactionHistory}>{children}</table>;

export const TransactionsBody = ({ type, amount, currency }) => (
  <>
      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
  </>
);

export const TransactionsThead = ()=>(
    <>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead></>
)

