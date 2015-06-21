var igotalent = angular.module('igotalent', ['ionic', 'ngCordova', 'LoginController', 'PostTalentController', 'GetMyTalentController', 'UtilityService',  'GetTalentController'])

igotalent.run(["$ionicPlatform", "LocalStorageService", "$cordovaDevice", "$cordovaDevice", "$window", function($ionicPlatform,LocalStorageService,$cordovaDevice,$window,$cordovaDevice) {
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
	if(!($window.localStorage.deviceUUID)){
		var uuid;
		if (ionic.Platform.isAndroid()) {
			uuid = $cordovaDevice.getUUID();
		}else
			uuid = randomString(16);
			LocalStorageService.set('deviceUUID', uuid);
	}
  });
}])


igotalent.directive("fileread", [function ($scope, $window, $rootScope) {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();

                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;

                    });
                }
				window.localStorage['media'] =  changeEvent.target.files[0].name;
				console.log(window.localStorage['media']);
				 reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);

igotalent.directive("filereads", [function ($scope, $window, $rootScope) {
    return {
        scope: {
            filereads: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();

                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.filereads = loadEvent.target.result;

                    });
                }
				window.localStorage['media1'] =  changeEvent.target.files[0].name;
				console.log(window.localStorage['media1']);
				 reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);


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
        templateUrl: "templates/getAllTalent.html",
	controller: 'GetTalentController'
    })

	.state('getTalent', {
        url: "/getTalent",
        templateUrl: "templates/getTalent.html",
	controller: 'GetMyTalentController'
    })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');
});
