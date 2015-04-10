describe('expenses utils', function() {
  
  beforeEach(module('ExpensesUtils'));

  describe('post', function() {
    var $http, apiRequest, postResult;

    beforeEach(inject(function(_apiRequest_, _$http_, appConfig) {
      $http = _$http_;
      apiRequest = _apiRequest_;

      postResult = jasmine.createSpyObj('postResult', ['success']);
      spyOn($http, 'post').and.returnValue(postResult);

      appConfig.backend = 'http://unit-test';
    }));

    it('should use api to post expenses data', function() {
      var data = { param: "value" };
      apiRequest.post('/route', { data: data });
      expect($http.post).toHaveBeenCalledWith('http://unit-test/route', data);
    });

    it('should use api to post expenses data', function() {
      var success = function() {};
      apiRequest.post('/route', { success: success });
      expect(postResult.success).toHaveBeenCalledWith(success);
    });
  });
});