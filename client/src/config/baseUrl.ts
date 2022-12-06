const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://liveadsstream-production.up.railway.app/api/v1"
    : "http://localhost:5000/api/v1";

export {API_BASE_URL}