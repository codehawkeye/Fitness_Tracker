const express = require("express");



const PORT = 3002;


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Your connected on Port http://localhost:${PORT}`);
});

