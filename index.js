const express = require("express");
const cors = require("cors");

const { employeeController } = require("./Routes/EmployeeRoutes");
const { connection } = require("./Config/db");
const { userController } = require("./Routes/UserEnquiryRoutes");
const { claimController } = require("./Routes/ClaimRoutes");

require("dotenv").config();
const PORT = process.env.PORT || 7500;
const app = express();
app.use(cors(), express.json());
app.get("/", (req, res) => {
  res.send("welcome to fastor");
});
app.use("/employee", employeeController);
app.use("/user", userController);
app.use("/leads", claimController);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connecting to the PORT ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
