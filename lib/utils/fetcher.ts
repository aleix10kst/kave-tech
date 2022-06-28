export const fetcher = async <T>(
  url: RequestInfo | URL,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(url, init);
  return res.json();
};
