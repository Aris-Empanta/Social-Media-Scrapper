const express = require("express")
const app = express()
const cheerio = require('cheerio');

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(5000)