const router = require("express").Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "Internal server error"}); 
        } else {
            res.status(200).json(JSON.parse(data));
        }
    })
});