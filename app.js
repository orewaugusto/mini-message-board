const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "How d'ya",
    user: "Arthur",
    added: new Date()
  },
  {
    text: "Hey mister",
    user: "John",
    added: new Date()
  }
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
})

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server is running at port ${PORT}`);
});