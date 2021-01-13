//File System
const fs = require('fs');
const path = require('path');

// MakeDirAsync
fs.mkdir(path.join(__dirname, 'notes'), (err) => {
    if (err) throw new Error(err.toString())
    console.log('MakeDirAsync done')
})

// writeFileAsync
fs.writeFile(
    path.join(__dirname, 'notes', 'notes.txt'),
    'Hello world', (err) => {
        if (err) throw new Error(err.toString())
        console.log('writeFileAsync done')
        fs.appendFile(path.join(__dirname, 'notes', 'notes.txt'), ' lol1', (err) => {
            if (err) throw new Error(err.toString())
            console.log('appendFileAsync done')
            fs.readFile(path.join(__dirname, 'notes', 'notes.txt'), 'utf-8', (err, data) => {
                if (err) throw new Error(err.toString())
                console.log('readFileAsync done')
                console.log(data)
            })
        })
    }
)

// renameAsync
fs.rename(
    path.join(__dirname, 'notes', 'notes.txt'),
    path.join(__dirname, 'notes', 'notes1.txt'),
    (err) => {
        if (err) throw new Error(err.toString())
        console.log('renameAsync done')
    }
)

