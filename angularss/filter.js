angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
    var search=[
        {
            "firstName":"aa",
            "lastName":"Merry",
            "gender":"bale",
            "salary":18903.40,
            "birthday":"2016-03-11"
        },
        {
            "firstName":"bb",
            "lastName":"Jack",
            "gender":"tale",
            "salary":9333.40,
            "birthday":"1987-07-11"
        },
        {
            "firstName":"cc",
            "lastName":"Helln",
            "gender":"female",
            "salary":13333.10,
            "birthday":"2016-02-23"
        },
        {
            "firstName":"dd",
            "lastName":"John",
            "gender":"male",
            "salary":1356.40,
            "birthday":"2016-12-01"
        }

    ];
    $scope.search=search;
    $scope.TextSearch="";
    $scope.SearchText="";

    $scope.searchs=function(obj){
          if ($scope.TextSearch != ""){
            if(obj.firstName.toLowerCase().indexOf($scope.TextSearch.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else if($scope.SearchText != ""){
            if(obj.lastName.toLowerCase().indexOf($scope.SearchText.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else if($scope.TextSearch != "" && $scope.SearchText != ""){
            if(obj.firstName.toLowerCase().indexOf($scope.TextSearch.toLowerCase()) != -1 && obj.lastName.toLowerCase().indexOf($scope.SearchText.toLowerCase()) != -1){
                return true
            }else {
                return false
            }
        }else {
            return true
        }
    }

}]);