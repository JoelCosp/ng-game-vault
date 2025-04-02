const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Videogame = require("./models/Videogame");
const { ObjectId } = mongoose.Types;

// Initialize the app
const app = express();
app.use(bodyParser.json());
app.use(cors());
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
app.put('/videogame/:id', async (req, res) => {
  const id = req.params.id;
  const { title, developer, genre, platforms, release_year, rating, description, price, image, multiplayer } = req.body;
  try {
    const existingVideogame = await Videogame.findById(id);
    if(!existingVideogame)
    {
      return res.status(404).json({ message: "El videojuego no existe" });
    }
    // El findByIdAndUpdate recibe 3 parametros:
      // ID del juego que se actualizara
      // Objeto con lo que se quiere actualizar. Debe tener lo mismo que el req.body
      // { new: true } ---> Para que la funcion devuelva el documento actualizado y no el original
    const updatedVideogame = await Videogame.findByIdAndUpdate(
      id,
      { title, developer, genre, platforms, release_year, rating, description, price, image, multiplayer },
      { new: true }
    );

    res.status(200).json(updatedVideogame);
  } catch(err) {
    console.log(err)
    return res.status(500).send(err.stack)
  }
});

// Delete
app.delete('/videogame/:id', async (req, res) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Invalid ID format');
  }

  try {
    const result = await Videogame.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.status(200).send('Videogame deleted');
    } else {
      res.status(404).send('Videogame not found');
    }
  } catch (err) {
    console.error('Error deleting videogame:', err);
    res.status(500).json({ error: err.message });
  }
});




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
