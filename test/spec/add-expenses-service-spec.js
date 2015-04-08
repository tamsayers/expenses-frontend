describe('add expenses service', function() {
  beforeEach(module('AddExpenses'));

  describe('success function', function() {
    var addExpensesService, $location;
    
    beforeEach(inject(function(_addExpensesService_, _$location_) {
      $location = _$location_;
      addExpensesService = _addExpensesService_;
      
      spyOn($location, 'path');
    }));
    
    it('should change the location to the home page', function() {
      addExpensesService.success();
      
      expect($location.path).toHaveBeenCalledWith('/');
    });
  });
});