describe('expenses controller function', function() {
    beforeEach(module('expensesApp'));

    var $scope, apiRequest;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        apiRequest = {
            post : function() {}
        };
        $controller('ExpensesFormController', {
            $scope : $scope,
            apiRequest : apiRequest
        });
    }));

    describe('form submit', function() {
        beforeEach(function() {
            $scope.expenses = [ {
                description : "desc1"
            }, {
                description : "desc2"
            }];
            
            spyOn(apiRequest, 'post');
        });

        it('should use api to post expenses data', function() {
            $scope.postExpenses();
            expect(apiRequest.post).toHaveBeenCalledWith('/expenses', $scope.expenses);
        });
    });

    describe('add expense', function() {
        it('should add another expense object to the scope', function() {
            expect($scope.expenses.length).toBe(1);
            $scope.addExpense();
            $scope.addExpense();
            expect($scope.expenses.length).toBe(3);
        });
    });
});