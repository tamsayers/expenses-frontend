var AddExpensesPage = require('../pages/add-expenses.page.js');

describe('the expenses form', function() {
  var addExpensesPage;

  beforeEach(function() {
    addExpensesPage = new AddExpensesPage();
  });

  it('should submit valid expenses', function() {
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

  it('should add another expenses row', function() {
    addExpensesPage.addExpense.click();
    
    expect(addExpensesPage.expenses().count()).toBe(2);
  });
});
