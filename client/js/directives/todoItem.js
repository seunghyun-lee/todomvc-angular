angular.module('todomvc')
    .directive('todoTitle', function () {
        return {
            template: '<h1>To do List</h1>'
        };
    });
    
angular.module('todomvc')
    .directive('todoItem', function () {
        return {
            templateUrl: '../../html/todoItem.tpl.html'
        };
    });

angular.module('todomvc')
    .directive('todoFilters', function () {
        return {
            templateUrl: '../../html/todoFilters.tpl.html'
        };
    });

angular.module('todomvc')
    .directive('todoForm', function () {
        return {
            templateUrl: '../../html/todoForm.tpl.html'
        };
    });