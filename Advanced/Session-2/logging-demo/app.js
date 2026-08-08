const express = require("express");
const logger = require("./logger");

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "mohsen"
  }
];


// Server Start
logger.info("Application started");


// Home
app.get("/", (req, res) => {

  logger.info("Home endpoint visited");

  res.json({
    message: "Welcome!"
  });

});


// Get Users
app.get("/users", (req, res) => {

  logger.info("Fetching all users");

  res.json(users);

});


// Create User
app.post("/users", (req, res) => {

  const { name } = req.body;

  if (!name) {

    logger.warn("User creation failed - Name is missing");

    return res.status(400).json({
      message: "Name is required"
    });

  }

  const user = {
    id: users.length + 1,
    name
  };

  users.push(user);

  logger.info(`User created successfully (ID=${user.id})`);

  res.status(201).json(user);

});


// Simulate Server Error
app.get("/error", (req, res) => {

  try {

    throw new Error("Database connection failed");

  } catch (err) {

    logger.error(err.message);

    res.status(500).json({
      message: "Internal Server Error"
    });

  }

});


// Fake Debug Endpoint
app.get("/debug", (req, res) => {

  logger.debug("This is a debug message");

  res.send("Debug endpoint");

});


app.listen(3000, () => {
  logger.info("Server listening on port 3000");
});