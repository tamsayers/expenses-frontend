describe('application', function() {
  beforeEach(module('expensesApp'));

  describe('routes provider', function() {
    var $location, $route, $rootScope;
    
    beforeEach(inject(function(_$location_, _$route_, _$rootScope_, _$httpBackend_) {
      $location = _$location_;
      $route = _$route_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
    }));

    it('should configure the add expenses page', function() {
      $httpBackend.expectGET('partials/expenses-form.html').respond(200)
      $location.path('/add-expenses');
      
      $rootScope.$digest();
      
      expect($route.current.controller).toBe('ExpensesFormController')
    });

    it('should configure the default page', function() {
      $httpBackend.expectGET('partials/home.html').respond(200)
      $location.path('');
      
      $rootScope.$digest();
      
      expect($route.current.controller).toBe(undefined)
    });
  });
  
  describe('messages', function() {
    var messages;

    beforeEach(inject(function(_messages_) {
      messages = _messages_;
      messages.add('message 1');
      messages.add('message 2');
    }));

    it('should store messages', function() {
      expect(messages.get()).toEqual(['message 1', 'message 2']);
    });

    it('should remove all messages', function() {
      messages.reset();

      expect(messages.get()).toEqual([]);
    });
  });
});