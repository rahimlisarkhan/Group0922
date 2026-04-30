import { useEffect, useState } from 'react';

export const useFetchData = (cl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);

      const res = await cl();
      if (res.result) {
        setData(res.data);
      } else {
        setError('Failed to load data.');
      }
      setLoading(false);
    };

    fetch();
  }, []);

  return { data, loading, error };
};
