angular.module('app').controller('registerController', function ($scope, $http, $localStorage) {
    const contextPath = 'http://localhost:8080';

    $scope.tryToRegister = function () {
        $http.post(contextPath + '/register', $scope.user)
            .then(function successCallback(response) {
               alert('Регистрация прошла успешно');
            }, function errorCallback(response) {
                window.alert(response.data.message);
                $scope.clearUser();
            });
    };
});