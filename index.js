const express = require("express");
const cors = require("cors");

const { employeeController } = require("./Routes/EmployeeRoutes");
require("dotenv").config();
const PORT = process.env.PORT || 7500;
const app = express();
app.use(cors(), express.json());
app.get("/", (req, res) => {
  res.send("welcome to fastor");
});
app.use("/employee", employeeController);

app.listen(PORT, () => {
  console.log(`connecting to the PORT ${PORT}`);
});
