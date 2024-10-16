const express = require('express');
const dotenv = require('dotenv');
const { dbConnect } = require('./config');
const authRoutes = require('./routes/authRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
dbConnect();

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/password', passwordRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
