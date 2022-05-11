const { Pool } = require('pg')

const PG_URI = 'postgres://ywfmttiw:SVVejg9RVVZ6qEeezUk0DmV8FrCSbX8J@ruby.db.elephantsql.com/ywfmttiw'

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};