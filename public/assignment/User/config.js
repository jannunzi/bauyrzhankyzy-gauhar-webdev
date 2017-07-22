// immediately invoked function expressions (iife):
// created an iife to protect all self-coded-functions
// and avoid any changes to be made by external users
// thus, invoking everything as one big function (module)
(function () {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateURL: "user/templates/login.view.client.html"
            })
            .when("/register", {
                templateURL: "user/templates/register.view.client.html"
            })
            .when("/profile/:userId", {
                templateURL: "user/templates/profile.view.client.html"
            })
    }
})();

