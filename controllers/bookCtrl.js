/**
 * Created by Administrator on 2016/5/11.
 */
app.controller('bookCtrl',function($scope,$http) {

    /*
    *
    *
    * http://yourdomain/apiname/10/3.
     And your corresponding MySQL query would be.
     SELECT * FROM 'table_name' LIMIT ({pagenumber}-1)*{itemsPerPage},{itemsPerPage}
     That results in.
     SELECT * FROM 'table_name' LIMIT 20,10
    *
    *
    $scope.users = [];
    $scope.totalUsers = 0;
    $scope.usersPerPage = 25; // this should match however many results your API puts on one page
    getResultsPage(1);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

    function getResultsPage(pageNumber) {
        // this is just an example, in reality this stuff should be in a service
        $http.get('path/to/api/users?page=' + pageNumber)//url
            .success(function(result) {
                $scope.users = result.data.Items;
                $scope.totalUsers = result.data.Count
            });
    }

    html:
     <div ng-controller="UsersController">
     <table>
     <tr dir-paginate="user in users | itemsPerPage: usersPerPage" total-items="totalUsers" current-page="pagination.current">
     <td>{{ user.name }}</td>
     <td>{{ user.email }}</td>
     </tr>
     </table>

     <dir-pagination-controls on-page-change="pageChanged(newPageNumber)"></dir-pagination-controls>
     </div>


     */

    $scope.list=[];
    $http.get('http://yuechong.github.io/simple-Angularjs-demo/book.json').success(function(data) {
        console.log(data);
        $scope.list=data;
    });

//    sort
    $scope.reverse = false;
    $scope.sortKey = 'id';
    $scope.sort = function(sortKey) {
        $scope.sortKey = sortKey;
        $scope.reverse  = !$scope.reverse;
    };





    /*pagination*/



});