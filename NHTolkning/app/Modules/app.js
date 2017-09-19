var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: 'home/home.html'
        })
        .when("/home", {
            templateUrl: "home/home.html"
        })
        .when("/about", {
            templateUrl: "about/about.html"
        })
        .when("/contact", {
            templateUrl: "contact/contact.html"
        })
        .otherwise({ redirectTo: '/' });
    });

