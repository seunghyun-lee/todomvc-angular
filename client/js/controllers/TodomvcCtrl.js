angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope, todomvcStorage) {
        
        todomvcStorage.get(function(err, todos) {
            if (err) return;
            $scope.todos = todos;
        });
        
        
        //$scope.message = "Todos";
        /*
        $scope.todos = [
            {
                id: 1,
                title: "gogogo",
                completed: false
            },
            {
                id: 2,
                title: "study",
                completed: true
            },
            {
                id: 3,
                title: "work",
                completed: true
            }
        ];
        */
        $scope.remove = function (id) {
            if(!id) return;

            var deletedTodoIndex = $scope.todos.findIndex(function (todo) {
                return todo.id === id;
            });

            if (deletedTodoIndex === -1) return;

            $scope.todos.splice(deletedTodoIndex, 1);
        }

        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim();
            if(!todoTitle) return;

            var newId = !$scope.todos.length ?
                1 : $scope.todos[$scope.todos.length - 1].id + 1;

            var newTodo = {
                id: newId,
                title: todoTitle,
                conpleted: false
            };

            $scope.todos.push(newTodo);
        };

        $scope.$watch('status', function () {
            if($scope.status === 'completed') {
                $scope.statusFilter = {completed: true}
            }else if ($scope.status === 'active') {
                $scope.statusFilter = {completed: false}
            }else{
                $scope.statusFilter = {}
            }
        });

        $scope.clearCompleted = function () {
            var incompletedTodos = $scope.todos.filter(function (todo) {
                return !todo.completed;
            });
            angular.copy(incompletedTodos, $scope.todos);
        };
    });
