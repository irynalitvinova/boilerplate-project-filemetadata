const express = require('express');
const cors = require('cors');
require('dotenv').config()
const multer = require('multer');
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
const upload = multer({dest: './public/data/upload' });
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  //  name, type, and size
  const {originalname, mimetype, size} = req.file;
  // req.file.originalname;
  // req.file.mimetype;
  // req.file.size;
  // res.json(req.file);
  res.json({
    name: originalname,
    type: mimetype,
    size: size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
