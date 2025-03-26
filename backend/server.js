const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Videogame = require("./models/Videogame");

// Initialize the app
const app = express();
app.use(bodyParser.json());

app.use(express.json()); // IMPORTANTE para poder usar post

// MongoDB connection string
const dbURI = "mongodb://localhost:27017/gamevault"; // Mongo database name

// Get all videogames
app.get("/videogames", async (req, res) => {
  try {
    const videogames = await Videogame.find();
    res.status(200).json(videogames);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get only one videogame
app.get("/videogame/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const videogame = await Videogame.findById(id);
    res.status(200).json(videogame);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create videogame
app.post("/videogames", async (req, res) => {
  const { title, developer, genre, platforms, release_year, rating, description, price, image, multiplayer } = req.body;

  try {
    const newVideogame = await Videogame.create({ title, developer, genre, platforms, release_year, rating, description, price, image, multiplayer });
    res.status(201).json(newVideogame);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

});

// Update user

// Delete

// Connect to MongoDB
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error: ", err);
  });

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
