const notes = require('express').Router();
const {readAndWriteFile, readFromFile} = require('../../db/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => {
        console.log(data);
        res.json(JSON.parse(data))
    })
    handleNoteView( './db/db.json')
    .then((data) => {
        console.log(data);
        res.json(JSON.parse(data))
    })
})

notes.post('/', (req,res) => {
    readAndWriteFile(req.body, './db/db.json')
    res.send(req.body)
})

notes.delete('/', (req, res) => {

})

module.exports = notes