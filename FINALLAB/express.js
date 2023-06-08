const express = require("express");
const server = express();

const mail = require("./models/mail"); 
const viewmail = require("./routes/viewmail");

server.use(express.static("public"));
server.use(express.urlencoded());
server.use(express.json());


server.set("view engine", "ejs");
server.use("/viewmail", viewmail)

// GET all mails
server.get("/mail", async (req, res) => {
  try {
    const mails = await mail.find();
    res.json(mails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific mail by ID
server.get("/mail/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foundMail = await mail.findById(id);
    if (!foundMail) {
      return res.status(404).json({ error: "Mail not found" });
    }
    res.json(foundMail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new mail
server.post("/mail", async (req, res) => {
  try {
    const newMail = new mail(req.body);
    await newMail.save();
    res.status(201).json(newMail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a mail by ID
server.delete("/mail/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMail = await mail.findByIdAndDelete(id);
    if (!deletedMail) {
      return res.status(404).json({ error: "Mail not found" });
    }
    res.json(deletedMail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT/UPDATE a mail by ID
server.put("/mail/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMail = await mail.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMail) {
      return res.status(404).json({ error: "Mail not found" });
    }
    res.json(updatedMail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.listen(3000, () => {
  console.log("Server Started, Visit localhost:3000");
});

const mongoose = require("mongoose");
mongoose
  .connect('mongodb://127.0.0.1:27017/mailinglist', { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.log(error.message));
