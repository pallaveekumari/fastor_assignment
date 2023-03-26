const express = require("express");
const cors = require("cors");

const { employeeController } = require("./Routes/EmployeeRoutes");
const { connection } = require("./Config/db");

require("dotenv").config();
const PORT = process.env.PORT || 7500;
const app = express();
app.use(cors(), express.json());
app.get("/", (req, res) => {
  res.send("welcome to fastor");
});
app.use("/employee", employeeController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connecting to the PORT ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
