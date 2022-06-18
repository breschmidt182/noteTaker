const express = require('express').Router();
const readAndWriteFile = require('../db/fsUtils');

express.get('/notes', (req, res) => {
    readAndWriteFile(req.body, '../db/db.json')
})

express.post('/notes', (req,res) => {

})