const express = require("express");
const notesRouter = require("./routes/notes.routes")
const logger = require("./middlewares/logger.middleware");
const counter = require("./middlewares/counter.middleware");
const timestamp = require("./middlewares/timestamp.middleware");
const errorHandler =require("./middlewares/error.middleware")

const app = express();
app.use(express.json());

app.use(logger);
app.use(counter);
app.use(timestamp);
// app.use((req,res,next)=>{
//     console.log(req.headers);
//     next();
// })
app.use("/notes",notesRouter);
app.use(errorHandler);
module.exports = app;
