const { Pool } = require('pg')

const PG_URI = 'postgres://awnumlxk:Wi-AzbUMHrXP5stcL5VWpWAD19-IWaVe@lallah.db.elephantsql.com/awnumlxk'

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};