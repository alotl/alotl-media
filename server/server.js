const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const userApiRouter = require('./routers/userApi.js');
const mediaApiRouter = require('./routers/mediaApi.js');
const signupApiRouter = require('./routers/signupApi.js');

const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);

/**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/login', userApiRouter);


app.post('/signup', (req, res) => {
  console.log(req.body);
  console.log('hi')
  res.status(200).json({hello:'hi :)'});
});

// app.use('/signup', signupApiRouter);

app.use('/media', mediaApiRouter);

app.get('/home', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});



module.exports = app;