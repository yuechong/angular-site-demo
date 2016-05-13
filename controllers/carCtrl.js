/**
 * Created by Administrator on 2016/5/12.
 */
app.controller('carCtrl',function($scope) {
    $scope.cars=[
        {
            "id": 1,
            "name": "Apple",
            "price": 45
        },
        {
            "id": 2,
            "name": "Iphone 4",
            "price": 2088
        },
        {
            "id": 3,
            "name": "Iwatch",
            "price": 2000
        },
        {
            "id": 4,
            "name": "Apple mini",
            "price": 3000
        },
        {
            "id": 5,
            "name": "iPhone",
            "price": 8600
        }
    ];
    $scope.newCar={};


    $scope.del = function(index) {
        $scope.cars.splice(index,1);
    };
    $scope.addonecar = function() {
        $scope.addshow=false;
        $scope.cars.push($scope.newCar);

    };
});