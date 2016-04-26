var app5 = angular.module('app5', []);

/* helper function to find index of an item in array of objects
    -returns -1 if item not in array */
function findIndex(arraytosearch, key, valuetosearch){
    for(var i=0; i<arraytosearch.length; i++){
        if(arraytosearch[i][key].toLowerCase() == valuetosearch.toLowerCase()){
            return i;
        }
    }
    return -1;
}


app5.controller('gListCtrl', function($scope){
    /* an object ('groceries') containing an array of items */
    $scope.groceries = [
        {item: "Tomatoes", purchase: false, quantity: 0},
        {item: "Potatoes", purchase: false, quantity: 0},
        {item: "Bread", purchase: false, quantity: 0},
        {item: "Hummus", purchase: false, quantity: 0}
    ];
    
    $scope.addItem = function(newItem) {
      if(!(newItem === undefined || newItem === "")){
          var index = findIndex($scope.groceries, "item", newItem);
          /* if index < 0, means that item doesn't exist in the list so we can add it */
          if(index < 0){  
            $scope.groceries.push({
              item: newItem, purchase: false
            });
            $scope.missingNewItemError = "";
            } else {
                $scope.missingNewItemError = "Item already exists";
            }
          /* no item was entered */
        } else{
            $scope.missingNewItemError = "Please Enter an Item";
        }
    };
    
    $scope.remItem = function(existItem) {
        var index = findIndex($scope.groceries, "item", existItem);
        /* splice(position to start the splice, how many items from position to splice, (option)how many items to add) */
        if(index >= 0){
            $scope.groceries.splice(index, 1);
        } else {
            $scope.missingNewItemError = "Item doesn't exist";
        }
        document.getElementById("text1").value = "";
    };
    
    $scope.addQuantity = function(item) {
        var index = findIndex($scope.groceries, "item", item);
        $scope.groceries[index]["quantity"] = $scope.groceries[index]["quantity"] + 1;
    }
    
});