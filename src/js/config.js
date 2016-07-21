
function config ($stateProvider, $urlRouterProvider) {

  $stateProvider

// keeps main page static
    // .state('root', {
    //   abstract: true,
    //   templateUrl: 'templates/layout.tpl.html'
    // })

// changes out pages
    .state('home', {
      url: '/',
      // templateUrl: 'templates/home.tpl.html',
      // controller: 'HomeController'
    })

    .state('about', {
      url: '/about',
      // templateUrl: 'templates/about.tpl.html'
    })

    .state('add', {
      url: '/add',
      // templateUrl: 'templates/add.tpl.html',
      // controller: 'AddController'
    });

  $urlRouterProvider.otherwise('/');

}

export { config };