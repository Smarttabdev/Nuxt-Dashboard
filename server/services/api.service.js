const pool = require("../../config/database");

module.exports = {
    getApis: callBack => {
        pool.query(
            `select api_id, api_name from api_names`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    }
};