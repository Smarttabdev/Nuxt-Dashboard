const { onedown, logRequest, createUser, getUserByUserId, getUsers, updateUsers, deleteUser, login, logout, linkedinLogin, gcrt, socialLoginCallback} = require("./user.controller");
const router = require("express").Router();
const { getUserByToken, checkToken } = require("../../server/auth/token_validation.js");

router.post("/fbcb" ,  socialLoginCallback);
router.post("/", createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updateUsers);
router.delete("/",checkToken, deleteUser);
router.post("/login", login);
router.post("/logout", checkToken, logout);
router.post("/me", getUserByToken);
router.post("/onedown", onedown);




module.exports = router;