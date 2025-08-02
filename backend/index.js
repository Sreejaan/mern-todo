const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes')
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

//test route
app.get("/", (req, res)=> {
  res.send("Server is running and working fine.");
});


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


//start server
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:5000`)
})