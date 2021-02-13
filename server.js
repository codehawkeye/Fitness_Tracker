const express = require("express");
const logger = require("morgan")

const PORT = 3002;
const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log(`Your connected on Port http://localhost:${PORT}`);
});

