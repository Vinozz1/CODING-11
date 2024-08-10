import http from 'http';

// Create an HTTP server
const server = http.createServer((re, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h>Hello, HTTP Server</h1>');
});

// Start the server 
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});