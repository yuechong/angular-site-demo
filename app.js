var app = angular.module('app', ['ngRoute','ngAnimate','angularUtils.directives.dirPagination']);

//is Logined
function LoginIn($rootScope, $location) {
    if (!$rootScope.loginIn) {
        $location.path('/');
    }
}

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template/login.html',
            controller:'LoginCtrl'
        })
        .when('/booklist', {
            resolve: {
                "isLogin": LoginIn
            },
            templateUrl: 'template/booklist.html',
            controller:'bookCtrl'
        })
        .when('/home', {
            resolve: {
                "isLogin": LoginIn
            },
            templateUrl: 'template/home.html',
            controller:'homeCtrl'
        })
        .when('/shopCar', {
            resolve: {
                "isLogin": LoginIn
            },
            templateUrl: 'template/shopcar.html',
            controller:'carCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});