const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Uvitracker - Círculo de Tasadores operativo\n');
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
