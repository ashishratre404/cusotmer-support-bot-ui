import { useState } from "react";
import { query } from "../api";

export const useQueryApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendQuery = async (message) => {
    setLoading(true);
    setError(null);

    try {
      const response = await query(message);
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendQuery, loading, error };
};
