
function SingleImgController ($scope, $stateParams, $http, SERVER, $state) {

  $scope.singlePhoto = {};


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

}

SingleImgController.$inject = ['$scope', '$stateParams', '$http', 'SERVER', "$state"];
export { SingleImgController };