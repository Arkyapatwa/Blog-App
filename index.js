const express = require("express");
const path = require('path');

// add dotenv config
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// setting the view for ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.get("/", (req, res) => {
    res.render("home")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});