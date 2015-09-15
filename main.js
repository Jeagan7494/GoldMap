angular.module('goldMap', []);

angular.module('goldMap').controller("mainController", ['$scope', function($scope) {

	$scope.image = "https://github.com/RefactorU/exercise-starters/blob/master/client-js/gold-rush/topo-co.jpg?raw=true";
	
	$scope.markers = [];
	$scope.xMarksTheSpot = function(event){

    	var x = event.clientX;
    	var y = event.clientY;

   $scope.markers.push({x : event.clientX, y : event.clientY}) 
   		//console.log(event, x, y);
};

}])