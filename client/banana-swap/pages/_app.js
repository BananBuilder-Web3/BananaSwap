import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import TransactionProvider from "../context/TransactionContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <TransactionProvider>
      <React.StrictMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.StrictMode>
    </TransactionProvider>
  );
};

export default MyApp;
