(function(angular) {


function mainController($scope, $http, shortcutCtrl) {



  //ngDialog.open({ template: 'popUpTemplate'});






// entry form=============================================
  $scope.units = ['oz','ml','l','g'];
  $scope.ozConv = {
    oz: 1,
    ml: 0.033814,
    l: 33.814,
    g: 128
  };

  $scope.bevUnits = 'oz';
  $scope.entries = [];

  $scope.gotItButtonHasBeenClicked = false;
  

  $scope.calculate = function() {
    var newEntry = {};

    newEntry.name = $scope.bevName;
    if (newEntry.name.length>21) {
      newEntry.dispName = newEntry.name.substring(0,21) + "...";
    } else {
      newEntry.dispName = newEntry.name;
    }

    newEntry.containers = $scope.bevCon;
    newEntry.size = $scope.bevSize;
    newEntry.units = $scope.bevUnits;
    newEntry.abv = $scope.bevAbv;
    newEntry.cost = $scope.bevCost;

    newEntry.pure = (newEntry.containers*(newEntry.size*$scope.ozConv[newEntry.units]))*(newEntry.abv/100);
    newEntry.value = newEntry.cost/newEntry.pure;


    newEntry.closed = false;

    //console.log(newEntry);
    $scope.entries.push(newEntry);


    $scope.bevName = "";
    $scope.bevCon = "";
    $scope.bevSize = "";
    $scope.bevAbv = "";
    $scope.bevCost = "";

  };



  $scope.clearList = function() {
    for(var k=0;k<$scope.entries.length;++k) {
      $scope.entries[k].closed = true;
    } 
  };





// abv beer searching===============================================================================
    $scope.nowLoading = false;
    $scope.searchQuery = "";
    $scope.beerData;

    $scope.minimizeSearch = false;


    $scope.$watch("searchQuery", function() {
      if ($scope.searchQuery.length > 0) {
        $scope.searchBeer();
      } else {
        $scope.beerData = [];
      }
    });
    
    $scope.gotItButtonToggle = function() {
      $scope.gotItButtonHasBeenClicked = true;      
    }


    $scope.searchBeer = function() {
      $scope.nowLoading = true;
      $http.get('/api/beers' + $scope.searchQuery)
        .success(function(data) {
          console.log(data);
          $scope.nowLoading = false;
          $scope.beerData = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
        

		  
		  
		  };  


    $scope.selectBeer = function(beer,abv) {
      //console.log(beer);
      $scope.bevName = beer;
      $scope.bevAbv = Number(Number(abv).toFixed(1));
  
    };




// container shortcuts========================================
  $scope.activeIcon = "beer";
  $scope.minimizeShortcuts = false;

  $scope.containerDoc = shortcutCtrl.containerDoc;




  $scope.isSet = function(tab) {
    return tab===$scope.activeIcon;
  };

  $scope.setTab = function(tab) {
    $scope.activeIcon = tab;
  };

  $scope.containerSelect = function(shortcut) {
    $scope.bevCon = shortcut.containers;
    $scope.bevSize = shortcut.volume;
    $scope.bevUnits = shortcut.units;


  };


}

  




  angular.module("boozApp", ['shortcutService']).controller("mainController", ["$scope", "$http", 'shortcutCtrl', mainController]);

})(angular);
