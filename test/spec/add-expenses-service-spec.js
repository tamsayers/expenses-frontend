describe('add expenses service', function() {
  beforeEach(module('AddExpenses'));

  describe('success function', function() {
    var addExpensesService, $location, messages;
    
    beforeEach(module('expensesApp'));
    beforeEach(inject(function(_addExpensesService_, _$location_, _messages_) {
      $location = _$location_;
      messages = _messages_;
      
      addExpensesService = _addExpensesService_;
      
      spyOn($location, 'path');
    }));

    it('should change the location to the home page', function() {
      addExpensesService.success();

      expect($location.path).toHaveBeenCalledWith('/');
    });

    it('should add a success message', function() {
      messages.add('should get removed');

      addExpensesService.success();

      expect(messages.get()).toEqual(['Expenses successfully added.']);
    });
  });
});