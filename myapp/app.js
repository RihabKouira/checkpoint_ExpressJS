const express = require("express");
const app = express();

const port = 4000;

const homeRouter = require("./routes/home");
const servicesRouter = require("./routes/services");
const contactRouter = require("./routes/contact");
const workingTimeRouter = require("./routes/workingTime");

app.use(express.static("public"));
let date = new Date();
let day = date.getDay();
let hours = date.getHours();
if (hours > 9 && hours < 19 && day < 6 && day > 0) {
  app.use(homeRouter);
  app.use(contactRouter);
  app.use(servicesRouter);
} else {
  app.use(workingTimeRouter);
}
app.listen(port, () => {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
