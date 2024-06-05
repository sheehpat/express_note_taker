const router = require("express").Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');

//Route gets all notes from database
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "Internal server error"}); 
        } else {
            res.status(200).json(JSON.parse(data));
        }
    })
});

//Route create new posts in database
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    //Unique ID generator
    const id = uuid();

    if (!title || !text) {
        return res.status(400).json({ error: "Title and text are required"});
    }

    const newNote = { id, title, text };
    readAndAppend(newNote, './db/db.json', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to add note" });
        }
        res.json('Note added succesfully!');
    });
});

//Function to read data and append data to it
const readAndAppend = (newData, file, callback) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        const parsedData = JSON.parse(data);
        parasedData.push(newData);
        fs.writeFile(file, JSON.stringify(parsedData, null, 2), (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    });
};

module.exports = router;