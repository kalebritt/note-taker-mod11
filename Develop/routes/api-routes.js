const router = require("express").Router;
const path = require("path");
const fs = require("fs");
// const res = require("express/lib/response");

router.get("/notes", (req, res) => {
  fs.readFile("../db/db.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      var notes = [];
      if (data) {
        notes = JSON.parse(data);
      }
      return res.json(notes);
    }
  });
});

router.post("/notes", (req, res) => {
  fs.readFile("../db/db.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      var notes = [];
      if (data) {
        notes = JSON.parse(data);
      }
      var currentNote = req.body;
      currentNote.id = notes.length;
      notes.push(currentNote);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes),
        (err, data) => {
          if (err) {
            throw err;
          }
        }
      );
      res.json(notes);
    }
  });
});

//finish building server
//create delete route: similar to 'post' route- /notes/:id
//ask TA about the following code
router.delete("/notes", (req, res) => {
    fs.readFile("../db/db.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        var notes = [];
        if (data) {
          notes = JSON.parse(data);
        }
        var currentNote = req.body;
        currentNote.id = notes.length;
        notes.delete(currentNote);
        fs.delete(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify(notes),
          (err, data) => {
            if (err) {
              throw err;
            }
          }
        );
        res.json(notes);
      }
    });
  });
