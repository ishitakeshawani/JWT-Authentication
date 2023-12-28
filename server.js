const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

app.use(express.json());

app.use("/api/auth",authRoute);


mongoose
  .connect(
    process.env.DB_PROTOCOL +
      "://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASS +
      "@" +
      process.env.DB_HOST +
      "/" +
      process.env.DB_NAME +
      "?" +
      process.env.DB_PARAMS,
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`API Listening to: http://${process.env.DB_HOST}//:` + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.on("SIGINT", () => {
  mongoose.connection.close();
  process.exit();
});
