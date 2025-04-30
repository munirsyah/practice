require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./config/db");
const User = require("./models/user");
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use("/api/auth", authRoutes);

// Sync DB and start server
sequelize.sync().then(() => {
  app.listen(3000, () =>
    console.log("Server running on http://localhost:3000")
  );
});
