module.exports = function() {
  var page = this;
  page.go = function() {
    browser.get('http://localhost:8080/index.html');
  };

};