var AddExpensesPage = function() {
  var page = this;
  page.go = function() {
    browser.get('http://localhost:8080/index.html');
  };
  page.date = element(by.model('expense.date'));
  page.description = element(by.model('expense.description'));
  page.clientName = element(by.model('expense.clientName'));
  page.supplier = element(by.model('expense.supplier'));
  page.cost = {
      amount: element(by.model('expense.cost.amount')),
      type: element(by.model('expense.cost.costType'))
  };
  page.submitButton = element(by.css('.expenses-form input[type=submit]'));
  
  page.cost.type.select = function(value) {
    page.cost.type.element(by.css('option[value="Simple"]')).click();
  };
}

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    var addExpensesPage = new AddExpensesPage();

    addExpensesPage.go();
    addExpensesPage.date.sendKeys('2015-01-01');
    addExpensesPage.description.sendKeys('Description 1');
    addExpensesPage.clientName.sendKeys('Client');
    addExpensesPage.supplier.sendKeys('Supplier');
    addExpensesPage.cost.amount.sendKeys('1.99');
    addExpensesPage.cost.type.select("Simple");
    
    addExpensesPage.submitButton.click();
    
    // verify saved - move page to expenses list?
  });
});
