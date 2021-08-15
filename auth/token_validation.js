const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
        token = token.slice(7);
        verify(token, 'ninjaninja',(err, decoded) => {
            if(err){
                res.json({
                    success:0,
                    message: "Invalid token"
                });
            } else {
                next();
            }
        });
        }else{
            res.json({
                success:0,
                message: "Access denied! unauthorized user"
            });
        }
    },
    getUserByToken(req, res) {
        var token = req.headers.authorization.slice(7);
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.'});
        
        verify(token, 'ninjaninja', function(err, decoded) {
          if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          
          res.status(200).send(decoded);
        });
      }
};