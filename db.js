const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connecting Mongodb");
  })
  .catch((e) => {
    console.log(" Not Connecting Mongodb");
  });
