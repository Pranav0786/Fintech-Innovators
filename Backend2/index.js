const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bizzModal = require("./bizz-model"); // Assuming bizz-model is correctly defined
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Backend2", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.error("Some problem occurred in connecting to the database", err);
  });

app.post('/api/register', async (req, res) => {
  console.log("Endpoint called");
  const data = req.body; // Declare data variable properly
  try {
    const doc = await bizzModal.create(data);
    res.send({
      message: "Admin Registered Successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Unable To Register Admin. Please Try Again",
      success: false,
    });
  }
});

const server = app.listen(8000, () => {
  console.log("Server is started and running");
});


server.on('error', (err) => {
  console.error('Server error:', err);
});
