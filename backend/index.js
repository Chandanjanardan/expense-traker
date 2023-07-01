const express = require("express");
const app = express();
const router = require("./routes/expense.routes");
// middleware
app.use(express.json());
const PORT = 3300;

app.use("/budget", require("./routes/budget.routes"));

app.listen(PORT, (req, res) => {
  console.log(`Listing at PORT ${PORT}...`);
});
