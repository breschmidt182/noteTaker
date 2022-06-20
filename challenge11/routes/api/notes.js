const notes = require('express').Router();
const {readAndWriteFile, readFromFile, getNoteIndex} = require('../../db/fsUtils');
const crypto = require('crypto');
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => {
        console.log(data);
        res.json(JSON.parse(data))
    })
})

notes.get('/', (req, res) => {
    getNoteIndex( './db/db.json')
    .then((data) => {
        console.log(data);
        res.json(JSON.parse(data))
    })
})

notes.post('/', (req,res) => {
    readAndWriteFile(req.body, './db/db.json')
    console.log(crypto.randomUUID());
    res.send(req.body)
})

notes.delete('/', (req, res) => {
    deleteNote(req.body, '1')
})

module.exports = notes