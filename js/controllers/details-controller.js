angular.module('AngularRouting')

.controller('DetailsCtrl', function($scope, $routeParams, Items) {
   
    $scope.itemID = $routeParams.itemID;
    $scope.item = {}
    
    Items.getOne($scope.itemID)
    .then(function(response){
        var items = response.data.items;
        items.forEach(function(i){
            if(i.id == $routeParams.itemID){
                $scope.item = i;
            }
        });
        
    }, function(response){
    
    alert('details working');
    });
});