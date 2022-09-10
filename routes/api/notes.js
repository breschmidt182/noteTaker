const notes = require('express').Router();
const {readAndWriteFile, readFromFile, getNoteIndex, deleteNote} = require('../../db/fsUtils');
const { v4: uuidv4 } = require('uuid');
const db = require('../../db/db.json');
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
    req.body.id = uuidv4();
    console.log(req.body);
    readAndWriteFile(req.body, './db/db.json')
    res.send(req.body)
})

notes.delete('/:id', (req, res) => {
    console.log(req.params)
    deleteNote('./db/db.json', req.params.id)
    res.send(req.body)
})

module.exports = notes