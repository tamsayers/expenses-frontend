var AddExpensesPage = require('../pages/add-expenses.page.js');

describe('add expenses', function() {
  it('should submit valid expenses', function() {
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
