const express = require("express");
const app = express();
// const router = require("./routes/expense.routes");
app.use(morgan("dev"));

// middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
const PORT = 3300;

app.use("/budget", require("./routes/budget.routes"));
app.use("/expense", require("./routes/expense.routes"));
app.use("/user", require("./routes/user.routes"));

app.listen(PORT, (req, res) => {
  console.log(`Listing at PORT ${PORT}...`);
});
