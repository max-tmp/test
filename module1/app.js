(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = '';
  $scope.inputValue = '';    

  $scope.checkIfTooMuch = function () {    
    var arr = $scope.inputValue.split(',');
    //$scope.message = arr.length;
    if ($scope.inputValue == '') {
        $scope.message = 'Please enter data first';
    } else if (arr.length <= 3) {
        $scope.message = 'Enjoy!';
    } else {
        $scope.message = 'Too much!';
    }
      
  };
}

})();
