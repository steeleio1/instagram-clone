function DownloadPicController ($scope, $http, SERVER, $state) {

	// $scope.hello = "hi there"

	$scope.photos = {};

	  init();

	  function init () {
	    $http.get(SERVER.URL).then( (res) => {
	    	console.log(SERVER.URL);
	    	console.log(res.data);
	      $scope.photos = res.data;
	    
	    });
	  }
}

DownloadPicController.$inject = ["$scope", "$http", "SERVER", "$state"];
export {DownloadPicController};