const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        console.log('hello')
         pool.query(`insert into users(name, email, password, lasttimeloggedin)
         values(?,?,?,CURDATE())`,
        [
           data.name,
            data.email,
            data.password
        ],
        (error,results,fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
        ); 
    },
    createSocial: (data, callBack) => {
        pool.query(`insert into users(name, email, password, lasttimeloggedin)
        values(?,?,"no password stored" ,CURDATE())`,
       [
          data.name,
           data.email
       ],
       (error,results,fields) => {
           if (error) {
               callBack(error);
           }
           return callBack(null, results);
       }
       ); 
   },
    getUsers: callBack => {
        pool.query(
            `select id, name, email, lasttimeloggedin from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id, name, email, lasttimeloggedin from users where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update users set name=?, email=?, password=? where id = ?`,
            [
                data.name,
                data.email,
                data.password, 
                data.id
            ],
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results);
                }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    takeOneDown: (email, callBack) => {
        pool.query(
            `UPDATE users set counter = counter-1 where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};