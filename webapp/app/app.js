(function tutorialAppIIFE(angular) {
  var app = angular.module('ResourcesSearch', ['ngRoute', 'ui.ace', 'pascalprecht.translate']);

  app.config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
    }
  ]);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'searchController',
      templateUrl: 'app/views/home.html'
    })
        /*
      .when('/castle', {
        controller: 'tutorialController',
        templateUrl: 'app/views/tutorial.html'
      })
         */
  });

  app.config(['$translateProvider',function($translateProvider) {
    var lang = window.localStorage.lang || 'cn';
    $translateProvider.preferredLanguage(lang);
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/i18n/',
      suffix: '.json'
    })
  }]);

})(angular);
