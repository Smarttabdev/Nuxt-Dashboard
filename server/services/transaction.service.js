const pool = require("../../config/database");

module.exports = {
    getTransactions: (query, callBack) => {
        pool.query(
            `SELECT n.*, u.name FROM (SELECT r.*, a.payment_provider_name FROM transactions r LEFT JOIN payment_providers a ON r.payment_provider = a.payment_id WHERE r.user_id = ? AND r.date BETWEEN ? AND ?) n LEFT JOIN users u ON n.user_id = u.id`,
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