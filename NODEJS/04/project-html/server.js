import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath} from 'url';
import handlebars from 'handlebars';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function renderTemplate(templatePath, data, callback) {
    fs.readFile(templatePath, 'utf-8', (err, source) => {
        if (err) {
            return callback(err);
        }
        const template = handlebars.compile(source);
        const result = template(data);
        callback(null, result);
    });
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hello, HTTP Server</h1>');
    } else if ( req.url === '/anas'){
        res.statusCode = 200;
        res.end('<h1>Hello, anas</h1>');
    } else {
        res.statusCode = 400;
        res.end('<h1>404 Not Found!</h1>');
    }
});

// Start the server 
const port = 3000;
const host = '127.0.0.1'; // 0.0.0.0
server.listen(port, host,() => {
    console.log(`Server is running on http://localhost:${host}:${port}`);
});