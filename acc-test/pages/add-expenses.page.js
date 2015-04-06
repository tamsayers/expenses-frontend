module.exports = function() {
  var page = this;
  page.go = function() {
    browser.get('http://localhost:8080/index.html#/add-expenses');
  };
  
  page.date = element(by.model('expense.date'));
  page.description = element(by.model('expense.description'));
  page.clientName = element(by.model('expense.clientName'));
  page.supplier = element(by.model('expense.supplier'));
  page.cost = {
      amount: element(by.model('expense.cost.amount')),
      type: element(by.model('expense.cost.costType'))
  };
  page.submitButton = element(by.css('.expenses-form__submit'));
  page.addExpense = element(by.css('.expenses-form__add-expense'));
  
  page.cost.type.select = function(value) {
    page.cost.type.element(by.css('option[value="Simple"]')).click();
  };
  
  page.expenses = function() {
    return element.all(by.css('.expense'));
  };
};
