var app = angular.module("WamApp", ["ngRoute"]);

app.controller("loginController", loginController);
app.controller("profileController", profileController);


app.config(configuration);

function  configuration($routeProvider) {
    $routeProvider
        .when("/login", {
            templateURL: "login.html"
        })
        .when("/register", {
            templateURL: "register.html"
        })
        .when("/profile/:userId", {
            templateURL: "profile.html"
        })

}

function loginController($scope, $location) {
    // JSON = JavaScript Object Notation
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ]



    $scope.login = function (user) {
        for(var u in users) {
            var _user = users[u];
            if(_user.username === user.username
            && _user.password === user.password) {
                // navigates user to his/her profile
                $location.url("profile/"+_user._id);
            }
        }
        $scope.errorMessage = "User not found";
    }

}

function profileController($scope, $routeParams) {
    var userId = $routeParams["userId"];
    alert(userId);
}