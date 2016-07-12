(function(angular) {
angular.module('vlDirectives', [])
    .directive('vlChosen', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                options: '=',
                ngModel: '='
            },
            link: function(scope, element) {
                element.chosen();
                element.on('change', function() {
                    $timeout(function () {
                        element.trigger('chosen:updated');
                    }, 100);
                });

                scope.$watchGroup(["options", "ngModel"], function() {
                    $timeout(function () {
                        element.trigger('chosen:updated');
                    }, 100);
                });
            }
        }
    }])
    .directive('vlAutocomplete', []);
})(angular);