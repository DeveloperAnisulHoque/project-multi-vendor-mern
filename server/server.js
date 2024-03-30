const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoutes");
const { dbConnect } = require("./utiles/db");
const app = express();

dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const port = process.env.port;
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  dbConnect();
  console.log(`Server runing on port ${port}`);
});
