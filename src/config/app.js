import { config } from "dotenv";

config();

const env = process.env;

export const application = {
  port: env.PORT,
  node_env: env.NODE_ENV,
};
