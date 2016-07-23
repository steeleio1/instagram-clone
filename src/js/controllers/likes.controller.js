function LikesController ($scope) {

	$scope.clicks = 0;
	$scope.likes = "likes"

	$scope.addLikes = function () {
		$scope.clicks++;
		if ($scope.clicks === 1){
			$scope.likes = "like"
		} else {
			$scope.likes = "likes"
		}
	}


} 


LikesController.$inject = ["$scope"];
export { LikesController };