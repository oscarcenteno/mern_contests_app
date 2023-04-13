const env = process.env;

console.log("Config...");

// server
export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;

// database
export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  PORT,
  HOST,
  SERVER_URL,
  MONGODB_URI,
  DATABASE_NAME,
};
