import React, { FC, useEffect, useState } from "react";

import "./App.scss";
import { fetchingData, ResponseData } from "./API/fetchData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import useFetching from "./hooks/useFetching";

const App: FC = () => {
  const [programData, setProgramData] = useState<ResponseData[]>([]);
  const [fetchData, isLoadingData, fetchError] = useFetching(async () => {
    const data = await fetchingData();
    setProgramData(() => data);
  });

  useEffect(() => {
    fetchData().then();
  }, []);

  return (
    <div className="App">
      <Header pageTitleText="Специализированные дисциплины" />
      {fetchError && (
        <div style={{ textAlign: "center" }}>Error: {fetchError}</div>
      )}
      {isLoadingData ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <Page programData={programData} />
      )}
      <Footer />
    </div>
  );
};

export default App;
