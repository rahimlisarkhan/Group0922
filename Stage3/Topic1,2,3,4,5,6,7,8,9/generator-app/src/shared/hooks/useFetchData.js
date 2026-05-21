import { useEffect, useState } from 'react';

export const useFetchData = (cl, { onSuccess, onError } = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);

      const res = await cl();

      console.log('res', res);

      if (res.result) {
        setData(res.data);
        onSuccess?.(res.data);
      } else {
        setError('Failed to load data.');
        onError?.();
      }
      setLoading(false);
    };

    fetch();
  }, []);

  return { data, loading, error };
};
