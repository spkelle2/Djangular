//<!-- .module(app name, dependencies list) -->
//<!-- .controller(name, dependencies list includes reference to function) -->
//<!-- person is property of scope object -->
//<!-- create a card with the given title and add it to list -->
(function(){
    'use strict';
    angular.module('scrumboard.demo',[])
        .controller('ScrumboardController',
                    ['$scope', ScrumboardController]);

    function ScrumboardController($scope) {
        
        $scope.add = function (list, title) {
            var card = {
                title: title
            };
            
            list.cards.push(card);
        };

        $scope.data = [
            {
                name: 'Django demo',
                cards: [
                    {
                        title: 'Create Models'
                    },
                    {
                        title: 'Create View'
                    },
                    {
                        title: 'Migrate Database'
                    },
                ]
            },
            {
                name: 'Angular Demo',
                cards: [
                    {
                        title: 'Write HTML'
                    },
                    {
                        title: 'Write JavaScript'
                    },
                ]
            }
        ];
    }
}());



