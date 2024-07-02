const mongoose = require("mongoose");

mongoose.connect(
  // "mongodb+srv://Mrcreative:mrcreative@123@mrcreative.orporiu.mongodb.net/"
  "mongodb+srv://limbikarsuraj11:Z81QmKKMFIBeCYEG@cluster-new.npbcjns.mongodb.net/"
);
const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("connected to db");
});

conn.on("disconnected", () => {
  console.log("disconnected from db");
});

conn.on("error", (err) => {
  console.log("could not connected to db", err);
});
