import { useEffect, useState } from 'react';

type FetchOptions<T> = {
  onSuccess?: (data: T[]) => void;
  onError?: () => void;
};

type FetchResult<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
};

export const useFetchData = <T>(
  cl: () => Promise<{ result: boolean; data: T[] }>,
  { onSuccess, onError }: FetchOptions<T> = {}
): FetchResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);

      const res = await cl();

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
