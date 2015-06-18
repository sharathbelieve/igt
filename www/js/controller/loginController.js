var LoginController = angular.module('LoginController', []);

LoginController.controller('LoginController', function($scope, $window, $http/*, $cordovaFacebook*/) {

  
   $scope.fb = function() {     
      /*  $cordovaFacebook.login(["public_profile", "email"])
          .then(function(success) {
            $cordovaFacebook.api("me?fields=picture,name,gender,last_name,birthday,relationship_status,email",[])
              .then(function(success) {

                  fbData = {
                    "name": success.name,
                    "phone":null,
                    "gender":success.gender,
                    "deviceUUID":id,
                    "lastName":success.last_name,
                    "birthDate": success.birthday,
                    "maritalStatus":success.relationship_status,
                    "email":success.email,
                    "location":success.location,
                    "loginType":"Facebook",
                    "loginId":success.id,
                    "profileImageUrl":'http://graph.facebook.com/'+success.id+'/picture?type=large'
                  };
                 

                  $http.post('', fbData).success(function(){
                    
                  }).error(function () {
                    
                  });
                  
                
              }, function (error) {
               
            });
          }, function (error) {
              
          });*/
}
$scope.gPlus = function() {
  $window.plugins.googleplus.login(
    {},
    function (obj) {
      //alert(JSON.stringify(obj)); 
      var googleData = {
        "email" : obj.email,
        "userID" : obj.userId,
        "displayName" : obj.displayName,
        "gender" : obj.gender,
        "imageURL" :obj.imageUrl,
        "name" : obj.givenName,
        "familyName" : obj.familyName,
        "birthday" : obj.birthday,
        "agemin" : obj.ageRangeMin,  
        "agemax" : obj.ageRangeMax,  
        "id" : obj.idToken
      }

      // do a http post
       $http.post('', googleData).success(function(){

      }). error(function(){
          console.log(err);
      })

    },
    function (msg) {
      alert('error: ' + msg);
    }

);
}
})


