const cookieController = {};
//cookie parser provides the medthod res.cookie,
//and it parses the coookies on the browser
//so the server side can use req.cookies.whatevercookiename


cookieController.setCookie = (req, res, next) => {
  //res.cookie is the method that stores the 
  //second argument under the name of first argument
  // SSID : res.locals.ssid
  res.cookie('ssid', res.locals.ssid);
  return next();
};

// gets the cookie from req, 
// and stores it in
// res.locals.ssid
cookieController.getCookie = (req, res, next) => {
  res.locals.ssid = req.cookies.ssid;
  return next();
};

cookieController.clearCookie = (req, res, next) => {
  //clears the cookie 
  console.log('clearCookie fired');

};

module.exports = cookieController;