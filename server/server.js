const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const userApiRouter = require('./routers/userApi.js');
const reviewApiRouter = require('./routers/reviewApi.js');

const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);

/**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../client')));


app.use('/api/user', userApiRouter);
app.use('/api/review', reviewApiRouter);


//

// app.use('/media', mediaApiRouter);

app.use("*", (req, res) => {
  console.log('react will handle it')
  res.sendFile(path.join(__dirname, '../public/build/index.html'));
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