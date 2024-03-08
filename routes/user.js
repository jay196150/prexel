const express = require("express");
const { createUser , getAllUser , getUserById } = require("../controller/user");
const UserRouter = express.Router();

UserRouter.post("/create-user" , createUser );
UserRouter.get("/get-all-user" , getAllUser );
UserRouter.get("/get-user/:id" , getUserById);

module.exports = UserRouter;