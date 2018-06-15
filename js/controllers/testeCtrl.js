 angular.module("teste").controller("testeCtrl", function($scope, $http){
 	$scope.total;

	$scope.somaTotal = function(){
		$scope.total = valor_1 + valor_2 + valor_3 + valor_4 + valor_5;
		return $scope.total;
	}

 	 $http.get('http://api.adsim.co/refrigerante/listar').
        then(function(response) {
            $scope.refrigerantes = response.data;
        });
 });