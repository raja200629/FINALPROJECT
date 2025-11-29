// src/context/FundContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  // Fetch sample data or use a real API
  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await axios.get("https://api.mfapi.in/mf");
        // limit to few for demo
        const sliced = res.data.slice(0, 20).map((f) => ({
          id: f.schemeCode,
          name: f.schemeName,
          category: f.schemeType || "General",
          returns: Math.floor(Math.random() * 20), // mock %
        }));
        setFunds(sliced);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  // Persist watchlist
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatch = (id) => {
    setWatchlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <FundContext.Provider
      value={{ funds, loading, error, watchlist, toggleWatch }}
    >
      {children}
    </FundContext.Provider>
  );
};

export const useFunds = () => useContext(FundContext);
