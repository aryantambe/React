import { useState, useEffect } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const res = await axios.get(`https://open.er-api.com/v6/latest/${currency}`);
        setData(res.data.rates); // axios response data is in res.data
        console.log("Fetched rates:", res.data.rates); // check in the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;