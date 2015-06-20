var GetMyTalentController = angular.module('GetMyTalentController', []);

GetMyTalentController.controller('GetMyTalentController', function($scope, $http, domainUrl) {
	
var uid = 1;
  $http.get(domainUrl+ 'mytalent?id=' +  uid).success(function(data){
  $scope.myTalent = data;
  console.log($scope.myTalent);
  }, function(err){

  })

})
