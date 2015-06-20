var igotalent = angular.module('igotalent', ['ionic', 'LoginController', 'PostTalentController', 'GetMyTalentController'])

igotalent.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

igotalent.value("domainUrl", "http://www.believetech.in/js/serv/igtservapp/")

igotalent.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('intro', {
		url: "/intro",
		templateUrl: "templates/intro.html"
	})

	.state('login', {
		url: "/login",
		templateUrl: "templates/userLogin.html",
		controller: 'LoginController'
	})

	.state('postTalent', {
		url: "/postTalent",
		templateUrl: "templates/posTalent.html",
		controller: 'PostTalentController'
	})

	.state('getAllTalent', {
        url: "/getAllTalent",
        templateUrl: "templates/getAllTalent.html"
    })

	.state('getTalent', {
        url: "/getTalent",
        templateUrl: "templates/getTalent.html",
        controller: 'GetMyTalentController'
    })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');
});
