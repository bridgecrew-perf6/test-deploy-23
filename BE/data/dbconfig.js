import dotenv from 'dotenv';

dotenv.config();

const config = {
  database: "Tour",
  server: "localhost\\SQLEXPRESS",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  },
};
export default config;