/* globals angular */
var movieApp = angular.module('MovieApp', []);

movieApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
    // $scope.searchTerm = '';
    $scope.movieList = [];

    $scope.search = function() {
        var req = {
            url: 'http://www.omdbapi.com',
            method: 'GET',
            params: {
                s: $scope.searchTerm,
            }
        }

        $http(req).then(function(response) {
            console.log(response.data.Search);
            $scope.movieList = response.data.Search;
        });
    }

    $scope.$watch('searchTerm', function(newVal, oldVal) {
        $scope.search();
    });

}]);
