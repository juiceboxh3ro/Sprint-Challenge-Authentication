const server = require('./api/server.js');

const PORT = 3300;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
