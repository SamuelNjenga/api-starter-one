const Router = require("express");

const { login } = require("../middlewares/login");
const { authorizationCheck } = require("../middlewares/authorization");

const router = Router();

module.exports = router;
