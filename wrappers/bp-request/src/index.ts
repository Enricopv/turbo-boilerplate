import axios from "axios";

const get = async <P = null, T = any>(
  url: string,
  headers?: { [key: string]: string }
): Promise<T> => {
  const result = await axios.get<P, T>(url, {
    headers,
  });

  return result;
};

export { get };
