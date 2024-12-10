const { Router } = require("express");
const indexRouter = Router();

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

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
})

module.exports = indexRouter;