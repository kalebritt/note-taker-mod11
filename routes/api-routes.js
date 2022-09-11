const router = require("express").Router();
const path = require("path");
const fs = require("fs");
// const res = require("express/lib/response");


//get route
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
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

//post route
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
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
// :/id
// req.params
router.delete("/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        var notes = [];
        if (data) {
          notes = JSON.parse(data);
        }
        var currentNote = req.body;
        currentNote.id = req.params.id;
        // notes.delete(currentNote);
        notes.splice(currentNote.id, 1)
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

  module.exports = router;

