angular.module('AngularRouting')

.controller('MainCtrl', function($scope, $http, Items) {
  $scope.allData; 
   
   // $http({method:'GET', url:'data/items.json'})
    Items.getAll()
    .then(function(response){
        $scope.allData = response.data;
        
    }, function(response){
    
    
    });
});