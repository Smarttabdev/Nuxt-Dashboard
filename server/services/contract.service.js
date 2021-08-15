const pool = require("../../config/database");

module.exports = {
    getContracts: (query, callBack) => {
        pool.query(
            `SELECT * FROM contracts WHERE user_id = ? AND DATE_FORMAT(start_date,'%y:%c') = DATE_FORMAT(?,'%y:%c')`,
            query,
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    }
};