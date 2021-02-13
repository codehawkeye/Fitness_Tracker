const express = require("express");
const logger = require("morgan");
const Mongoose = require("mongoose");
const PORT = 3002;
const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// middleware functions

app.use(require("./routes/htmlRoutes"))
Mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`Your connected on Port http://localhost:${PORT}`);
});

