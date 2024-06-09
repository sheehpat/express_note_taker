//Dependencies needed for application
const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3007;

//const api = require('./public/assets/js/index');


//Middleware to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

/* //Update the functions
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      noteData = JSON.parse(data);
      res.send(noteData);
    });
  }); 

  app.post('/api/notes', (req, res) => {
    const notes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      noteData = JSON.parse(data);
      noteData.push(notes);
      let number = 1;
      noteData.forEach((note, index) => {
        note.id = number;
        number++;
        return noteData;
      });
      console.log(noteData);

      stringData = JSON.stringify(noteData);

      fs.writeFile('./db/db.json', stringData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send('You have successfully submitted a new note!');
  }); */