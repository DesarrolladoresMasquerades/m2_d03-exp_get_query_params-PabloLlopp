const express = require("express");

const hbs = require("hbs");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

/*
app.get("/search", (req, res)=>{
  res.render("search-form");
})
app.get("/search-results", (req, res)=>{
  const searchString = req.query.searchString;
  const searchDate = req.query.searchDate;

  const searchResults = ["beatles", "nirvana"].filter((el) => el.includes(searchString))

  res.render("search-results", {searchString, searchDate, searchResults});
})
*/

app
  .route("/search")
  .get((req, res) => {
    res.render("search-form");
  })
  .post((req, res) => {
    const searchString = req.body.searchString;
    const searchDate = req.body.searchDate;
    const searchResults = ["beatles", "nirvana"].filter((el) => el.includes(searchString))

    res.render("search-results", { searchString, searchDate, searchResults });
  });

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
