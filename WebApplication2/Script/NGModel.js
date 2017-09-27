(function () {

    var MyModule = angular.module("MyModule", []);

    var MyController = function ($scope, $http) {
        
        var onSuccess = function (response) {
            $scope.user = response.data;
        };

        var onFail = function () {
            $scope.error = "Error occured";
        };

        $scope.Search = function (username) {
            $http.get("https://api.github.com/users/" + username).then(onSuccess, onFail);
        // https://api.github.com/users/robconery
        };


        

    };

    MyModule.controller("MyController", ["$scope", "$http", MyController]);

} ());