import app from './src/app.js';
const PORT = 3000;


// Start the server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} -> http://localhost:${PORT}`);
});