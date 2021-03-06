import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

const App = () => {
  const [selectedPunk, setselectedPunk] = useState(0);
  const [punkListData, setPunkListData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "/assets?asset_contract_address=0xD8e6f1104925E9519f29de5A058BF906C5FBfeDA&order_direction=asc"
        );
        setPunkListData(result.data.assets);
      } catch (error) {
        throw error;
      }
    };
    return fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData && punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setselectedPunk={setselectedPunk}
          />
        </>
      )}
    </div>
  );
};

export default App;
