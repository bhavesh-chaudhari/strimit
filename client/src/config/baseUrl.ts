const API_BASE_URL = process.env.NODE_ENV === "production" ? process.env.PROD_API_URL : "http://localhost:5000/api/v1"

export {API_BASE_URL}