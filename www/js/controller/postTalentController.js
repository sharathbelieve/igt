var PostTalentController = angular.module('PostTalentController', []);

PostTalentController.controller('PostTalentController', function($scope, $stateParams, $http, domainUrl, $ionicModal) {
	
  
$scope.selectCat = 'Select Categories';
$scope.selSubCat = 'Select Sub Category';

  var cid;
  $http.get(domainUrl+'categories').success(function(categories){
  console.log(categories);
  $scope.categories = categories;
  }, function(err){
  	console.log(err);
  })
  
  
  
var selectedCateogryID;
var selectedSubCateogryID;
  $scope.getCID = function() {
  
  	console.log(this.category.cid);
    $scope.selectCat = this.category.name;
    selectedCateogryID = this.category.cid;

    $http.get(domainUrl+'subcategories?cid=' + this.category.cid).success(function(subCategories){
  console.log(subCategories);
  $scope.subCategories = subCategories;
  }, function(err){

  })
  }

  $scope.getSubCID = function() {
  
  	
    $scope.selSubCat = this.subCategory.name;
    selectedSubCateogryID = this.subCategory.cid;
  }


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


	$scope.doneCat = function() {
		$scope.catModal.hide();
	}

	$scope.doneSubCat = function() {
		$scope.subCatModal.hide();
	}

  $scope.videoURL = false;
  $scope.submit = function() {
    alert(this.talent);
    alert(this.description);
    alert(this.choice);
    alert(this.category);
    alert(selectedCateogryID);
    alert(selectedSubCateogryID);
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
