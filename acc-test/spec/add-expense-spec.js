describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080/index.html');

    element(by.model('expense.date')).sendKeys('2015-01-01');
    element(by.model('expense.description')).sendKeys('Description 1');
    element(by.model('expense.clientName')).sendKeys('Client');
    element(by.model('expense.supplier')).sendKeys('Supplier');
    element(by.model('expense.cost.amount')).sendKeys('1.99');
    element(by.model('expense.cost.costType')).element(by.css('option[value="Simple"]')).click();
  });
});
