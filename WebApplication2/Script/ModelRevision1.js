(function () {
    var SampleModule = angular.module("SampleModule", []);

    var MyController = function ($scope, $http) {

        var onFail = function () {
            $scope.Error = "Error";
        };

        $http.get("https://api.github.com/users/robconery").then(onSuccess);

        var onSuccess = function (responce) {
            $scope.Person = responce.data;
        };

    };

    SampleModule.controller("MyController", ["$scope","$http" , MyController]);

} ());