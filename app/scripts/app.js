angular.module('Nakama',[]);

angular.module('Nakama').config(function ($routeProvider){
	  $routeProvider
	    .when("/", {
	      templateUrl : "scripts/views/home/home.html"
	    })
	    .otherwise({
	      redirectTo : "/"
	    });

	});
