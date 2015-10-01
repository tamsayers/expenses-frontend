var ViewExpensesPage = require('../pages/view-expenses.page.js');

describe('the view expenses page', function() {
  var viewExpensesPage;

  
  beforeEach(function() {
    viewExpensesPage = new ViewExpensesPage();
    viewExpensesPage.go();
  });

  it('should display a page of the most recent expenses', function() {
  
  });
});