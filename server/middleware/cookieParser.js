const parseCookies = (req, res, next) => {
  
  var cookiesString = req.headers.cookie || '';
  var cookies = {};
  if (cookiesString.length > 0) {
    var rawCookiesArray = cookiesString.split('; ');
    rawCookiesArray.forEach(function(x) {
      var pair = x.split('=');
      cookies[pair[0]] = pair[1];
    });   
  }
  req.cookies = cookies;
  next();
};

module.exports = parseCookies;

