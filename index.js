const express = require('express');
const multer  = require('multer')

const app = express();
const port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(multer({ dest: '/tmp' }).single('image'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/stats', (req, res, next) => {
  if(req.file) {
    res.send({ size: req.file.size });
  } else {
    res.send({})
  }
});

app.listen(port, () => console.log(`Example app listening on port ${8080}!`));
