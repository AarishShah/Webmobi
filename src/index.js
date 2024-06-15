const express = require("express");
const app = express();

const mainRouter = require("./routers/main");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(mainRouter);


app.listen(port, () => {
  console.log("Server is up on port " + port);
});