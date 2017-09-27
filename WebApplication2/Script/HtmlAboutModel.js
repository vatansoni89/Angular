(function () {

    var MyModule = angular.module("MyModule", []);

    var MyController = function ($scope, $http) {
        $scope.message = "This is message";
        $scope.imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeLhOTEqGQr6dhj8-s3MumDuNon40G0srsYOGaPgH1glxDFuLaA";

        var Person = function () {
            return {
                firstName: "Vatan",
                lastName: "Soni",
            }

        }

        $scope.Person = Person();
    };

    var AController = function ($scope, $http) {

        var intUser = function (response) {
            $scope.user = response.data;
            $scope.user.avatar_url = "https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/942516_1036304019767611_7904782681126130252_n.jpg?oh=272ae2f79abbb0ed28280854f3c948bf&oe=5A52D72A";
        };

        $http.get("https://api.github.com/users/robconery").then(intUser);
    };

    MyModule.controller("MyController", ["$scope", "$http", MyController]);
    MyModule.controller("AController", ["$scope", "$http", AController]);

} ());