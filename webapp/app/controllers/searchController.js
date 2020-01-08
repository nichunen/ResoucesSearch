(function searchControllerIIFE() {
  var SearchController = function(searchFactory, appSettings) {
    var vm = this;
    vm.sortBy = "id";
    vm.reverse = false;
    vm.results = [];
    vm.currentResult;

    // this.questions = data;
    var currentElement = 0;
    //this.question = this.questions.id[1];

    function init() {
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
        searchFactory.getResults()
        .success(function(response) {
          response.forEach(function(result) {
            vm.results.push(result);
          });
          vm.currentResult = vm.results[currentElement];
        });
    }

    init();

    /*
    this.submit = function(answerOption) {
      this.selectedAnswer = answerOption;
      currentElement++;
      vm.currentQuestion = vm.questions[vm.currentQuestion.nextQuestionId - 1];
      //this.question = this.questions[currentElement];
    };

    this.makeOptionStyle = function(selectedAnswer) {
      this.selectedOptionStyle = "{'background-color':'" + this.selectedAnswer + "'}"
    };

    this.makeAnswerStyle = function(selectedAnswer) {
      this.selectedAnswerStyle = "{'background-color':'" + this.selectedAnswer + "'}"
    };
     */

  };

  SearchController.$inject = ['searchFactory', '$translate'];

  angular.module('ResourcesSearch').controller('searchController', SearchController);

})();
