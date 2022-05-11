const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('SSID', res.locals.ssid);
  return next();
};

// gets the cookie from req, 
// and stores it in
// res.locals.ssid
cookieController.getCookie = (req, res, next) => {
  res.locals.ssid = req.cookies.ssid;
  return next();
};


module.exports = cookieController;