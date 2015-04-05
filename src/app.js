angular.module('exp.development', []).constant('appConfig', {
  backend : 'http://localhost:9000'
});

var expensesApp = angular.module('expensesApp',
    [ 'ngRoute', 'exp.development' ]);

expensesApp.config([ '$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-expenses', {
    templateUrl : 'partials/expenses-form.html',
    controller : 'ExpensesFormController'
  }).otherwise({
    templateUrl : 'partials/home.html',
  });
}]);