var PostTalentController = angular.module('PostTalentController', []);

PostTalentController.controller('PostTalentController', function($scope, $stateParams, $http, domainUrl, $ionicModal) {
	
  var cid;
  $http.get(domainUrl+'categories').success(function(categories){
  console.log(categories);
  $scope.categories = categories;
  }, function(err){

  })
  
  $http.get(domainUrl+'subcategories?cid=1').success(function(subCategories){
  console.log(subCategories);
  $scope.subCategories = subCategories;
  }, function(err){

  })
  
	$ionicModal.fromTemplateUrl('templates/catModal.html', function (modal) {
	$scope.catModal = modal;
	},{
		scope: $scope,
		animation: 'slide-in-up',
		backdropClickToClose: false
	});
	
	$ionicModal.fromTemplateUrl('templates/subCatModal.html', function (subCatModal) {
	$scope.subCatModal = subCatModal;
	},{
		scope: $scope,
		animation: 'slide-in-up',
		backdropClickToClose: false
	});

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