import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';

const app = express();

// Middleware Setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Root Endpoint for Health Check
app.get('/', (req, res) => {
  res.status(200).send('Backend is running!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
