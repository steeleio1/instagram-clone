
function config ($stateProvider, $urlRouterProvider) {

  $stateProvider

// keeps main page static
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })


// changes out pages
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'DownloadPicController'
    })

    .state('root.about', {
      url: '/about/:id',
      templateUrl: 'templates/about.tpl.html',
      controller: "SingleImgController"
    })

    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'UploadController'
    });

  $urlRouterProvider.otherwise('/');

}

export { config };