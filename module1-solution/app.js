(function(){
'use strict';

angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.dishes = "list comma separated dishes you usually have for lunch";
  $scope.message = "";
  $scope.menu = "";
  $scope.changeColor = "";

   $scope.check = function(){
     var coma = ",";
     $scope.menu = $scope.menu.replace(/, ,/g,", "); 
     var totalNumberOfDishes = splitString($scope.menu, coma);

     if ($scope.menu == "") {
        $scope.message = "Please enter data first"
        $scope.changeColor = "class2"
      }
    else if (totalNumberOfDishes < 4 && $scope.menu !== false) {
      $scope.message = "Enjoy!"
      $scope.changeColor = "class1"
    } else {
       $scope.message = "Too much!"
       $scope.changeColor = "class1"
     }
   };

    function splitString(string, separator) {
    var numberOfDishes = string.split(separator);
    // $scope.message = numberOfDishes.length;
    return numberOfDishes.length;
  };

};
})();
