var PostTalentController = angular.module('PostTalentController', []);

PostTalentController.controller('PostTalentController', function($scope, $stateParams, $http, domainUrl) {
	
  var cid;
  $http.get(domainUrl+'categories').then(function(data){
     console.log(data.data);
	$scope.categories = data.data;

  }, function(err){

  })

  $scope.videoURL = false;
  $scope.submit = function() {
    alert(this.talent);
    alert(this.description);
    alert(this.choice);
    alert(this.category);
    alert(this.item.name);
    alert(this.dd.name);
  }
  
  $scope.cat = function() {
  console.log(this.item.cid);
  cid = this.item.cid;
  
  $http.get(domainUrl+'subcategories?cid='+cid).then(function(data){
     console.log(data.data);
	$scope.subcategories = data.data;
console.log($scope.subcategories);
  }, function(err){

  })
  }
  $scope.video = function() {

    if(this.choice == 'video') {
    $scope.videoURL = true;
  } else {
    $scope.videoURL = false;
  }

  }
})