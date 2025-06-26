import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json()) 
      .then((res) => {
        setData(res.rates); // set rates
        console.log("Fetched rates:", res.rates); // check in the console
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
