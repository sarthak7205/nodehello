const http = require('http');

const server = http.createServer((req, res) => {
    
    const url = req.url;

    if (url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('welcome home')
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Welcome to About Us page')
        res.end();
    } else if (url === '/node') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('welcome to my Node.js project')
        res.end();
    } 
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');

});
