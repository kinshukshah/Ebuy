import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async function () {
      try {
        let { data } = await axios[method](url, body, headers);
        setResponse(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [method, url, body, headers]);
  return { response, loading, error };
};

export default useAxios;
