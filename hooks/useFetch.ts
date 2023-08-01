import { Data } from "@/types/formdata";
import { useState, useEffect } from "react";
import axios from "axios";
import http from "@/api/http";

const useFetch = () => {
  const [data, setData] = useState<Data[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    http
      .get("/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        setData([]);
      });
  }, []);

  return [data, error, loading] as [typeof data, typeof error, typeof loading];
};

export default useFetch;
