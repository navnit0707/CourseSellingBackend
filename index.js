const express = require("express");
const cors = require("cors");

//Routes files
const adminRouter = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());

//routes controll
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log(`server started at 3000`);
});
