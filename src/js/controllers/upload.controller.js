function UploadController ($scope, $http, SERVER, $state) {



  $scope.uploadPhoto = (photo) => {
  	photo.likes = 0;
  	photo.likes++;
    $http.post(SERVER.URL, photo).then( (res) => {
    	// back to homepage in browser
      $state.go('root.home');
         // $scope.? = {};
    });
  };


}

UploadController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { UploadController };


// https://i0.wp.com/bossfight.co/wp-content/uploads/2016/07/boss-fight-free-high-quality-stock-images-photos-photography-owl-branch-tree.jpg?resize=1650%2C600&ssl=1 


