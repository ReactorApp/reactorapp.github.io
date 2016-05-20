(function() {
  var app = angular.module("ReactorBetaApp", ["firebase"]);

  app.controller('SignupCtrl', function($scope, $firebaseArray) {
    var ref = new Firebase("https://reactor-beta.firebaseio.com/emails");
    var emails = $firebaseArray(ref);
    $scope.saved = false;
    $scope.data = {};
    $scope.joinBeta = function() {
      if ( $scope.data.email ) {
        emails.$add({
          email: $scope.data.email
        }).then(function(){
          $scope.saved = true;
        });
      }
    };
  });
})();
