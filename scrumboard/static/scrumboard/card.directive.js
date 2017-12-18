(function(){
    'use strict';
    
    angular.module('scrumboard.demo')
        .directive('scrumboardCard', CardDirective);

    function CardDirective(){
        return {

            // where to find this directive
            templateUrl: '/static/scrumboard/card.html',
            
            // use as html 'Element'
            restrict: 'E',
        
            // controller for sending updates to database
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(url, $scope.card);
                };

                // wait 500ms before sending changes to django
                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }
})();
