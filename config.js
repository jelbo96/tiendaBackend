const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: env.DB_USER || 'bsale_test',
    password: env.DB_PASSWORD || 'bsale_test',
    database: env.DB_NAME || 'bsale_test',
  },
};

module.exports = config;
