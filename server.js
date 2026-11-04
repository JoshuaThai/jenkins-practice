const http = require('node:http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jenkins Practice</title>
</head>
<body>
    <h1>Jenkins Practice</h1>
    <button onclick="document.querySelector('#message').textContent = 'Hello, tester!'">
        Say hello
    </button>
    <p id="message"></p>
</body>
</html>
`;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(html);
}).listen(3000, '127.0.0.1', () => {
    console.log('Practice app running at http://127.0.0.1:3000');
});