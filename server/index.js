import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import config from './config';
// ADD these
import userRoutes from './routes/user';
import authRoutes from './routes/auth';

// DB connection
require('./config/dbConnection');

const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ADD routes
app.use('/', userRoutes);
app.use('/', authRoutes);


// API calls for testing
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// HEROKU - serve build folder
// if (process.env.NODE_ENV === 'production') {
// Serve any static files
app.use(express.static(path.join(__dirname, '../', 'client/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'client/build', 'index.html'));
});
// }

console.log(path.join(__dirname, '../', 'client/build', 'index.html'))

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ':' + err.message });
  }
});

app.listen(config.port, () => {
  console.log(`Listening at port ${config.port}`);
});
