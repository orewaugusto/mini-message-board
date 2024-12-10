const express = require("express");

const app = express();

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server is running at port ${PORT}`);
});