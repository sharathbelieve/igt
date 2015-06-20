var GetTalentController = angular.module('GetTalentController', []);

GetTalentController.controller('GetTalentController', function($scope, $http, domainUrl) {

  $http.get(domainUrl+ 'alltalent').success(function(data){
  $scope.talent = data;
  console.log($scope.talent);
  }, function(err){

  })

});


