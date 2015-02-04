var redditApp = angular.module("RedditApp", [])

redditApp.controller("SearchController", ["$scope", "$http", function($scope, $http){

  $scope.searchTerm = "cat";
  console.log("http://www.reddit.com/search.json?q=" + $scope.searchTerm)
  $scope.searches = [];

  $scope.search = function() {
    if($scope.searches.indexOf($scope.searchTerm) == -1){
      $scope.searches.push({active: true, query: $scope.searchTerm})
    }

    console.log($scope.searchTerm)

    var req = {
      url: "http://www.reddit.com/search.json",
      params: {
        q: $scope.searchTerm,
      }
    }

    $http(req).success(function(data){
      if($scope.searches.indexOf($scope.searchTerm) == -1){
      $scope.searches.push($scope.searchTerm)
      window.localStorage.searches = JSON.stringify($scope.searches);
      }
      $scope.results = data.data.children
      $scope.loading = false
    });
    console.log($scope.searches)
  }

  $scope.activeClass = function(search){


    if ($scope.searches.indexOf($scope.searchTerm) > -1) {
    //In the array!
      console.log("active")
      return true
    } else {
        //Not in the array
      return false
      console.log("inactive")
    }


    // if ($scope.searchTerm = indexOf)
    //if search term = list item turn list item blue

  }

}])
