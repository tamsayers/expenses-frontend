angular.module('ExpensesUtils', ['exp.development']).factory('apiRequest', [
    '$http',
    'appConfig',
    function($http, appConfig) {
  return {
    post: function(resource, config) {
      var url = appConfig.backend + resource;
      return $http.post(url, config.data).success(config.success);
    }
  }
}]);
