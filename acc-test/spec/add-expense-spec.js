var AddExpensesPage = require('../pages/add-expenses.page.js');
var HomePage = require('../pages/home.page.js');

describe('the expenses form', function() {
  var addExpensesPage;

  beforeEach(function() {
    addExpensesPage = new AddExpensesPage();
    addExpensesPage.go();
  });

  it('should submit valid expenses', function() {
    addExpensesPage.date.sendKeys('2015-01-01');
    addExpensesPage.description.sendKeys('Description 1');
    addExpensesPage.clientName.sendKeys('Client');
    addExpensesPage.supplier.sendKeys('Supplier');
    addExpensesPage.cost.amount.sendKeys('1.99');
    addExpensesPage.cost.type.select("Simple");

    addExpensesPage.submitButton.click();

    new HomePage().expectExpensesAddedSuccessfully();
  });

  it('should add another expenses row', function() {
    addExpensesPage.addExpense.click();
    
    expect(addExpensesPage.expenses().count()).toBe(2);
  });
});
