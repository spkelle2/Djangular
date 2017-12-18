(function(){
    'use strict';
    
    angular.module('scrumboard.demo')
        .directive('scrumboardCard', CardDirective);

    function CardDirective(){
        return {

            // where to find this directive
            // clear the cache when updating this file so it reloads
            templateUrl: '/static/scrumboard/card.html',
            
            // use as html 'Element'
            restrict: 'E',
        
            // controller for sending updates to database
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(url, $scope.card);
                };
                
                // scope talks back and forth with html
                // delete the card at this url
                $scope.delete = function(){
                    $http.delete(url).then(

                        // then remove it from our current page    
                        function(){
                            var cards = $scope.list.cards;
                            // by removing 1 card at the card's index
                            cards.splice(cards.indexOf($scope.card), 1);
                        }
                    );
                };

                // wait 500ms before sending changes to django
                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }
})();
