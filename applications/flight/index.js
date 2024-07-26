import express from "express";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

const port = process.env.PORT || 3333;

mongoose.connect(
  "mongodb://localhost:27017/flight-bookings",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {}
);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
