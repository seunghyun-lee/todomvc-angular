// service, factory, provider
angular.module('todomvc').factory('todomvcStorage', function ($http) {
   var storage = {
       todos: [],

       get: function (callback) {
            $http.get('api/todos')
                .then(function success(response) {
                    console.log(response);
                    callback(null, angular.copy(response.data, storage.todos));
                }, function error(err) {
                    console.error(err);
                    callback(err);
                });                
       },
       /*
       get: function () {
           return storage.todos;
       },

       post: function (todoTitle) {
            var newId = !storage.todos.length ?
                1 : storage.todos[storage.todos.length - 1].id + 1;
            var newTodo = {
                id: newId,
                title: todoTitle,
                completed: false
            };
            storage.todos.push(newTodo);
       },

       delete: function (id) {
           var deletedTodoIdx = storage.todos.findIndex(function (todo) {
               return todo.id === id;
           });
           if (deletedTodoIdx === -1) return;
           storage.todos.splice(deletedTodoIdx, 1);
       },

       deleteCompleted: function () {
            var incompleteTodos = storage.todos.filter(function (todo) {
                return !todo.completed;
            });
            angular.copy(incompleteTodos, storage.todos);
       }
       */
   }; 

   return storage;
});