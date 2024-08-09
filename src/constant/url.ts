type Environment = "development" | "production";

export const API_URL: Record<Environment, string> = {
  development: "http://localhost:8080",
  production: "http://api.togetheroad.me:8080",
};

export const serverUrl =
  API_URL[(process.env.REACT_APP_ENV as Environment) || "development"];
