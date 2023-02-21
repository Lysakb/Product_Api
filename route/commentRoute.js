const express = require("express");
const {productComment} = require("../controller/commentController");
const authenticateUser = require("../middleware/authentication");
const commentRouter = express.Router();

commentRouter.post("/:id", authenticateUser ,productComment);

module.exports = commentRouter;