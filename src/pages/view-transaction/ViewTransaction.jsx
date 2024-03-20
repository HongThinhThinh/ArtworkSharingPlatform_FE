import React from "react";
import TransactionHistory from "../../component/transaction-history/TransactionHistory";

function ViewTransaction() {
  return (
    <div style={{ padding: "0 2em", width:"100%", height:"auto"}}>
      <TransactionHistory  transaction="allTransactions"/>
    </div>
  );
}

export default ViewTransaction;
