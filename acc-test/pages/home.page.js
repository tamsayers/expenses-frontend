module.exports = function() {
  var page = this;
  page.go = function() {
    browser.get('http://localhost:8080/index.html');
  };

  page.expectExpensesAddedSuccessfully = function() {
    expect(element(by.css('.feedback__message')).getText()).toEqual('Expenses successfully added.');
  }
};