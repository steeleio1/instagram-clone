function DownLoadPicController ($scope, $http, SERVER ) {

	// $scope.hello = "hi there"

	$scope.photos = [];

	  init();

	  function init () {
	    $http.get(SERVER.URL).then( (res) => {
	      $scope.photos = res.data;
	       $scope.gif = {};
	    });
	  }
}

DownLoadPicController.$inject = ["$scope", "$http", "SERVER"];
export {DownLoadPicController};