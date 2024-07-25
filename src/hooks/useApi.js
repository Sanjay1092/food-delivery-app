import { useEffect, useState } from "react";

const useApi = (api) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        return setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return data;
};

export { useApi };
