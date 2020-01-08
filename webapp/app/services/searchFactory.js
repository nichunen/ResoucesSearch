(function searchFactoryIIFE() {

  // Create a customers factory
  var searchFactory = function($http) {
    var factory = {};
    factory.results = [];

    factory.getResults = function() {
      return $http.get('http://localhost:3000/results');
    };

    return factory;
  };

  searchFactory.$inject = ['$http'];

  angular.module('ResourcesSearch').factory('searchFactory', searchFactory);
})();
