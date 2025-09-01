const BASE_URL = "http://localhost:5050";

export const ENDPOINTS = {
  HEALTH_CHECK: `${BASE_URL}/health`,
  INGEST_DOCS: `${BASE_URL}/api/ai/ingest`,
  QUERY: `${BASE_URL}/api/ai/query`,
  PEEK_DB: `${BASE_URL}/api/ai/debug/peek?tenant_id=TENANT_ID&limit=LIMIT`,
};
