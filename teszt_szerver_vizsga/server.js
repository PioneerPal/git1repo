const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Vizsga szerver");
});

server.listen(port, hostname, () => { 
   console.log("A szerver fut a http://127.0.0.1:3000/ címen");
});
