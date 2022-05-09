const { Pool } = require('pg')

const PG_URI = 'postgres://bwzctbwf:EmEg3YMJbUzhGhipRHACTEj05iqNaCbm@lallah.db.elephantsql.com/bwzctbwf'

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};