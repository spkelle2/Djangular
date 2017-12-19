(function () {
    'use strict';

    // any function passed to run will be called as soon as angular hits this
    // code. In this case, we also called the new function 'run'
    angular.module('scrumboard.demo').config(['$routeProvider', config])
        .run(['$http', run]);

    // .when('relative url', what_to_show)
    function config($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/static/html/scrumboard.html',
            controller: 'ScrumboardController'
        }).when('/login', {
            templateUrl: '/static/html/login.html',
            controller: 'LoginController'
        }).otherwise('/');
    }

    function run($http){
        // return the token to the browser with the given header
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';

        // telling angular the name of django's csrf cookie
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();
