app.controller('LoginCtrl', function($scope, $location, $http, $rootScope, $timeout){
    $scope.login = {};
    /*init*/
    var init = function(){
        if(localStorage['remenber']=='true'){
            $scope.login.email=localStorage['email'];
            $scope.login.pwd=localStorage['pwd'];
            $scope.remenber=localStorage['remenber'] == "true" ? true : false;
        }

    };
    init();
    /*user message*/
    var user={};
    $http({
        method: 'get',
        url:'/myBook/app/data.json'
    }).then(function success(resp){
        console.log("work!");
        console.log(resp);
        user.email = resp.data[0].name;
        user.pwd = resp.data[0].pwd;

    },function error(resp){
        console.log("wrong");
    });
    /*btn submit*/
	$scope.submit = function() {
        console.log($scope.remenber);
        $scope.loading = true;
		if($scope.login.eamil != "" && $scope.login.pwd != ""){

            if($scope.login.email == user.email && $scope.login.pwd == user.pwd  ){
                $rootScope.loginIn = true;
                if($scope.remenber){
                    localStorage['email']=$scope.login.email;
                    localStorage['pwd']=$scope.login.pwd;
                    localStorage['remenber']=$scope.remenber;
                }else{
                    localStorage.clear();
                }
                $location.path('/booklist');
            }else{

                $timeout(function() {
                    $scope.loading = false;
                    $scope.massege = "Username or Password is incorrect";
                },1000);

                $scope.login={};
            }
			//$location.path('/booklist');
		}
        console.log($scope.login);
	}

});