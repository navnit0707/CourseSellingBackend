const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Routes files
const adminRouter = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());

//routes controll
app.use("/admin", adminRouter);

// Connect to MongoDB

mongoose.connect("mongodb://localhost:27017/courses", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "courses",
});

app.listen(3000, () => {
  console.log(`server started at 3000`);
});
