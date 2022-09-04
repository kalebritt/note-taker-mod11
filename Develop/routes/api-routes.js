const router = require('express').Router;
const path = require('path');
const fs = require('fs');
// const res = require("express/lib/response");

router.get("/notes", (req, res) => {
    fs.readFile("../db/db.json", (err, data) => {
        if (err) {
            throw err
        } else {
            var notes = []
            if(data) {
                notes = JSON.parse(data)
            }
            return res.json(notes)
        }
    })
});

router.post();

router.delete();
