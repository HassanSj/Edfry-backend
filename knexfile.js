module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'your_username',
        password: 'your_password',
        database: 'your_database_name',
      },
      migrations: {
        directory: './migrations', // Create a 'migrations' directory in your project
      },
      seeds: {
        directory: './seeds', // Optional: Create a 'seeds' directory for seed data
      },
    },
  };