const { getRequestsWithApi, getRequestsPercent, getTransactions } = require("./admin.controller");
const router = require("express").Router();
const { checkToken } = require("../../server/auth/token_validation.js");

router.post("/getRequestsWithApi", checkToken, getRequestsWithApi);
router.post("/getRequestsPercent", checkToken, getRequestsPercent);
router.post("/getTransactions", checkToken, getTransactions);

module.exports = router;