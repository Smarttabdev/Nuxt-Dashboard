const pool = require("../../config/database");
const { getContracts } = require('./contract.service');

module.exports = {
    getRequestsWithApi: (query, callBack) => {
        pool.query(
            `SELECT r.*, a.api_name, SUM(request_points) points FROM requests r LEFT JOIN api_names a ON r.api = a.api_id WHERE r.user_id = ? AND r.date BETWEEN ? AND ? GROUP BY r.date ORDER BY a.api_name, r.date`,
            query,
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getRequestsCount: (query, callBack) => {
        pool.query(
            `SELECT *, SUM(request_points) as sum FROM requests WHERE user_id = ? AND DATE_FORMAT(date,'%y:%c') = DATE_FORMAT(?,'%y:%c') GROUP BY user_id`,
            query,
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
};