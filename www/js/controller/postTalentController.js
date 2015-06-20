var PostTalentController = angular.module('PostTalentController', ['lr.upload']);

PostTalentController.controller('PostTalentController', function($scope, $stateParams, $http, domainUrl, $ionicModal, $window) {
	
  
$scope.selectCat = 'Select Categories';
$scope.selSubCat = 'Select Sub Category';
$scope.Vtitle = false;
$scope.Vdesc = false;
$scope.Vcat = false;
$scope.Vsubcat = false;

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
		$scope.selSubCat = 'Select Sub Category';
		$scope.Vcat = false;
	}

	$scope.doneSubCat = function() {
		$scope.subCatModal.hide();
		$scope.Vsubcat = false; 
	}

  $scope.videoURL = false;
  $scope.submit = function() {
 	if(this.talent == null) {
  		$scope.Vtitle = true;
		$scope.Vdesc = false;
		$scope.Vcat = false;
		$scope.Vsubcat = false;
		$scope.Vmedia = false;

	} else if(this.description == '' || this.description == null) {
  		$scope.Vdesc = true;
		$scope.Vtitle = false;
		$scope.Vcat = false;
		$scope.Vsubcat = false;
		$scope.Vmedia = false;

	} else if($scope.selectCat == 'Select Categories') {
  		$scope.Vcat = true;
		$scope.Vtitle = false;
		$scope.Vdesc = false;
		$scope.Vsubcat = false;
		$scope.Vmedia = false;

	} else if($scope.selSubCat == 'Select Sub Category') {
		$scope.Vsubcat = true;  		
		$scope.Vcat = false;
		$scope.Vtitle = false;
		$scope.Vdesc = false;
		$scope.Vmedia = false;
		
	} else if(window.localStorage['media'] == '' && window.localStorage['media1'] == '') {
		$scope.Vmedia = true;	
		$scope.Vsubcat = false;  		
		$scope.Vcat = false;
		$scope.Vtitle = false;
		$scope.Vdesc = false;
	} else {
		console.log('validation done not post the data');
		console.log(this.talent);
		console.log(this.description);
		console.log(selectedCateogryID);
		console.log(selectedSubCateogryID);
		console.log(window.localStorage['media']);
		console.log(window.localStorage['media1']);
		window.localStorage['media'] = '';
		window.localStorage['media1'] = '';
	}
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
