var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: 'app/Modules/home/home.html'
        })
        .when("/home", {
            templateUrl: "app/Modules/home/home.html"
        })
        .when("/about", {
            templateUrl: "app/Modules/about/about.html"
        })
        .when("/contact", {
            templateUrl: "app/Modules/contact/contact.html"
        })
        .otherwise({ redirectTo: '/' });
    });

