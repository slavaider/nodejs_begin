const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, data) => {
                if (err) throw err
                res.end(data.toString())
            })
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf-8', (err, data) => {
                if (err) throw err
                res.end(data.toString())
            })
        } else if (req.url === '/api/users') {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            const users = [
                {name: 'Name1', age: 25},
                {name: 'Name2', age: 26},
                {name: 'Name3', age: 27}
            ]
            res.end(JSON.stringify(users))
        }
    } else if (req.method === 'POST') {
        const body = []
        req.on('data', (data) => {
            body.push(Buffer.from(data))
        })
        req.on('end', () => {
            const message = body.toString().split('=')[1]
            res.end(`<h1>Ваше сообщение:${message}</h1>`)
        })
    }
})
server.listen(3000, 'localhost', () => {
    console.log('Server is running');
})
