var categoryApp = angular.module('categoryApp', ['ui.bootstrap']);
categoryApp.controller('categoryController', function ($scope, $http, $window) {


    //add data
    $scope.addcat = function () {
        $http({
            method: 'POST',
            url: '/api/addcatmastermaster/',
            data: $scope.catadd,
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (data) {
                if (!data.success) {
                $scope.formMessage = data.message;
                $scope.status = data.status;
                if ($scope.status == 0) {
                    alert('Category Added Succesfully');
                    $window.location.reload();
                } else {
                     alert('Unsuccessful');
                     $window.location.reload(); 
                }
            };   
        })
    };

    //list data
    $scope.listcatmaster = function () {
        //alert($scope.total);
        $http({
            method: 'GET',
            url: '/api/listcatmaster',
            dataType: 'jsonp'
        }).then(function (response) {
            $scope.listcatdata = response.data;
              });
    };
    
    
    //get data for edit
    $scope.getcat = function (id) {
        //console.log(id);
        $http({
            method: 'GET',
            url: '/api/getcatdata/' + id,
            dataType: 'jsonp'
        }).then(function (response) {
            $scope.getproductdataa = response.data;
            //console.log($scope.getproductdataa);
            $scope.getProductArray = [];
            $scope.getProductArray.push($scope.getproductdataa);
            $scope.newdata= $scope.getProductArray;
            //console.log($scope.getProductArray.push($scope.getproductdataa));
            //console.log($scope.getProductArray)

            //console.log("asadd");
            //console.log(Object.entries($scope.getproductdataa));
            //console.log($scope.getproductdataa);
        });
    };

//update edit
    $scope.editcat = function (id) {
        //alert(new data[0].productname);
        //$scope.bal1 = $scope.newdata[0].productname;
       // alert(id);
        //alert($scope.bal1 "+" $scope.bal2);

        $http({
            method: 'PUT',
            url: '/api/edicatmaster/' + id,
            data: $scope.newdata,
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (data) {
            // console.log(data);
            if (!data.success) {
                $scope.formMessage = data.message;
                $scope.status = data.status;
                if ($scope.status == 0) {
                    alert('Edit product  Successful');
                    $window.location.reload();
                } else {
                    alert('Unsuccessful');
                    $window.location.reload();
                }
            }
            ;
        })

    };
    
    
    

});