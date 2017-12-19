(function () {
    'use strict';

    angular.module('scrumboard.demo')
        .controller('LoginController',
            ['$scope', '$http', '$location', LoginController]);

    function LoginController($scope, $http, $location) {

        console.log('registering LoginController');

        $scope.login = function() {

            // post(where_to_post, what_to_post -- the user object)
            // then(if success, if failure)
            $http.post('/auth_api/login/', $scope.user)
                .then(function () {
                    $location.url('/');
                },
                function () {

                    // the login error called in login.html
                    $scope.login_error='Invalid username/password combo';
                });
        }
    }
})();
