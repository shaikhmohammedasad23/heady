var ProductmasterApp = angular.module('ProductmasterApp', ['ui.bootstrap']);
ProductmasterApp.controller('ProductmasterController', function ($scope, $http, $window) {


    //add data
    $scope.Productadd = function () {
        $http({
            method: 'POST',
            url: '/api/addproduct/',
            data: $scope.product,
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (data) {
            if (!data.success) {
                $scope.formMessage = data.message;
                $scope.status = data.status;
                if ($scope.status == 0) {
                    alert('Added Product Succesfully');
                    $window.location.reload();
                } else {
                    alert('Unsuccessful');
                    $window.location.reload();
                }
            }
            ;

        })
    };

//list category for drop down
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

//list product
    $scope.listcityproduct = function () {
        //alert($scope.total);
        $http({
            method: 'GET',
            url: '/api/listproduct',
            dataType: 'jsonp'
        }).then(function (response) {
            $scope.listproduct = response.data;
            //console.log($scope.listproduct);

        });
    };

//get data for edit
    $scope.getproduct = function (id) {
        //console.log(id);
        $http({
            method: 'GET',
            url: '/api/getproductdata/' + id,
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
    $scope.editproduct = function () {
        //alert(new data[0].productname);
        //$scope.bal1 = $scope.newdata[0].productname;
       // alert(id);
        //alert($scope.bal1 "+" $scope.bal2);

        $http({
            method: 'POST',
            url: '/api/editprodtmaster/',
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