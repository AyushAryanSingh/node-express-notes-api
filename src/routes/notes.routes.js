const express = require("express");
const router = express.Router();
const fakeAuth = require("../middlewares/auth.middleware")
const asyncHandler = require("../utils/asyncHandler")
const {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}= require("../controllers/notes.controllers")

router.get("/",asyncHandler(getNotes));
router.post("/",fakeAuth,asyncHandler(createNote));
router.put("/:id",fakeAuth,asyncHandler(updateNote));
router.delete(":id",fakeAuth,asyncHandler(deleteNote));

module.exports = router;
