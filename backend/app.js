const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/auth");
const portfolioRoutes = require("./routes/portfolio");
const eventRoutes = require("./routes/events");

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/events", eventRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
