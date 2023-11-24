const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'root',
    database: 'test'
});

const allUsers = "SELECT * FROM user;";

async function getData(sqlQuery, args=[]) {
    let conn;

    try {
        conn = await pool.getConnection();
        const res = await conn.query(sqlQuery, args);

        return res;
  
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = {
    getData,
    queries: {
        allUsers
    }
}
