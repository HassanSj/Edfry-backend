const { Pool } = require('pg'); // Import the Pool class from pg
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'edfry',
    password: 'admin',
    port: 5432 // Default PostgreSQL port
  });

module.exports = db;
