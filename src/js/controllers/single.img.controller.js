
function SingleImgController ($scope, $stateParams, $http, SERVER, $state) {

  $scope.singlePhoto = {};
  $scope.likeText ="Likes"


  init();
  function init () {

    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.singlePhoto = res.data;
             console.log ($scope.singlePhoto);
    });
  }

    $scope.deleteMe = (singlePhoto) => {
    $http.delete(SERVER.URL + singlePhoto._id).then( (res) => {
      $state.go('root.home')
      });
  };


$scope.likeMe = function (singlePhoto) {
  singlePhoto.likes ++;
    if (singlePhoto.likes === 1){
      $scope.likeText = "like"
    } else {
      $scope.likeText = "likes"
    }

  $http.put(SERVER.URL + singlePhoto._id, singlePhoto).then((res) => {
  })
}


}

SingleImgController.$inject = ['$scope', '$stateParams', '$http', 'SERVER', "$state"];
export { SingleImgController };