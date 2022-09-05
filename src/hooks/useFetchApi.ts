import { useState, useEffect, useCallback } from "react";

// custom hook
export default function useFetchApi<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const onFetchData = useCallback(async () => {
    try {
      const request: T = await (await fetch(url)).json();

      setData(request);
    } catch (_error) {
      setError(_error);
    } finally {
      setLoading(false);
    }
  }, [url]);


  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  return {
    data,
    error,
    loading
  };

}