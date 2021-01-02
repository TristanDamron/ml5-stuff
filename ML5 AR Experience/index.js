const express = require("express");
const app = express();

// @todo: Set this up for heroku before deployment
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log("Server Started");
});