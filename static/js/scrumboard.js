//<!-- .module(app name, dependencies list) -->
//<!-- .controller(name, dependencies list includes reference to function) -->
//<!-- we assign properties (i.e. other objects) and functions to scope -->
//<!-- so we can use those objects/functions elsewhere that touches our js -->

(function(){
    'use strict';
    
    // the []'s instantiate the module
    angular.module('scrumboard.demo', ['ngRoute'])
        .controller('ScrumboardController',
                    ['$scope', '$http', '$location', ScrumboardController]);
    
    // pass all dependencies to our controller function in the same order
    // as they were declared above
    function ScrumboardController($scope, $http, $location) {
        
        $scope.add = function (list, title) {
            
            // this object needs to be of the same format as our card model
            var card = {
                list_guy: list.id,
                title: title
            };
            
            // do not show added card until it is added to our database
            // access what was passed to the database - the name of the card
            $http.post('/scrumboard/cards/', card).then(function(response){
                list.cards.push(response.data);
            },
            function(){
                alert('Could not create card');
            });            
        };

        $scope.logout = function(){
            $http.get('/auth_api/logout/').then(function () {
                $location.url('/login');
            });
        }

        $scope.data = [];
        // get returns a 'promise'. then calls the supplied function as soon
        // as data arrives. response.data is the json data
        // get queries the api at the relative URL
        $http.get('/scrumboard/lists/').then(function(response){
            $scope.data = response.data;
        });

    }
}());



