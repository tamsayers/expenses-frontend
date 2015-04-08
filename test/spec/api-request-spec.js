describe('expenses api request', function() {
  
  beforeEach(module('ExpensesUtils'));

  describe('post', function() {
    var $http, apiRequest;

    beforeEach(inject(function(_apiRequest_, _$http_, appConfig) {
      $http = _$http_;
      apiRequest = _apiRequest_;
      
      spyOn($http, 'post');
      appConfig.backend = 'http://unit-test';
    }));

    it('should use api to post expenses data', function() {
      var data = { param: "value" };
      apiRequest.post('/route', data);
      expect($http.post).toHaveBeenCalledWith('http://unit-test/route', data);
    });
  });
});