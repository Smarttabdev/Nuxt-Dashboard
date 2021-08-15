const { takeOneDown, create, createSocial, getUserByUserId, getUsers, updateUser, deleteUser, getUserByUserEmail } = require("../../server/services/user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
    createUser: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });

        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if(!results){
              return res.json({
                  success: 0,
                  message: "Failed to update users"
              })
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            message: "user deleted successfully"
          });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.status(401).json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        const result = compareSync(body.password, results.password); 
        if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, "ninjaninja", {
                expiresIn: "1h"
            });
            return res.json({
                success: 1,
                message: "login successfuly",
                token: jsontoken,
                id: results.id
            });
        } else {
            return res.status(401).json({
                success: 0,
                data: "Invalid email or password "
            });
            
        }
    });
    },
    logout: (req, res) => {
      //Logout
    res.send("Logout successful");
  },
  socialLoginCallback: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
          console.log(err);
      }
      if (!results) {
        console.log('user does not exist, creating');
        createSocial(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        }); 

      }else{
        console.log('user exists, its all all good');
        return res.status(200).json({
          success: 1,
          data: 'All Good'
        });
        
      }
    });
    },

    logRequest: (req,res)=>{
      return res.json({
        success: 1,
        message: "Response Logged"
      });
    },
    onedown:(req,res)=>{
      const email = req.body.email;
      takeOneDown(email, (err, results)=>{
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
        }
     
};