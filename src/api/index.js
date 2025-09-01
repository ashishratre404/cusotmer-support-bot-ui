import axios from "axios";
import { ENDPOINTS } from "./constant";

export const healthCheck = async () => {
  const response = await axios.get(ENDPOINTS.HEALTH_CHECK);
  return response.data;
};

export const ingestDocs = async (docs) => {
  const response = await axios.post(ENDPOINTS.INGEST_DOCS, docs);
  return response.data;
};

export const query = async (queryText) => {
  try {
    const response = await axios.post(ENDPOINTS.QUERY, { query: queryText });
    return response.data;
  } catch (err) {
    console.error("Query API failed:", err);
    throw err;
  }
};

export const peekDb = async (tenantId, limit) => {
  const response = await axios.get(
    ENDPOINTS.PEEK_DB.replace("TENANT_ID", tenantId).replace("LIMIT", limit)
  );
  return response.data;
};
