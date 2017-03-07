app.controller('CalCSController', ['$scope', 'data','$window',function($scope,data,$window){
	$scope.subject=["Applied Mathematics 1","Chemistry Theory","Chemistry Practical","Mechanical Theory","Mechanical Practical","Electronics Theory","Electronics Practical","Workshop Practice","Technical English","Comphrensive Viva"];
	$scope.grade=["10","10","10","10","10","10","10","10","10","10"];
	$scope.weight=["4","4","1","4","1","4","1","3","4","4"];

	$scope.SGPA=0;

	$scope.cal=function(){


		$scope.total=0;
		$scope.hasBack=false;
		data.backSubName=""

		for(i=0;i<10;i++){
			if($scope.grade[i]==0)
			{
				$scope.hasBack=true;
				data.backSubName+=$scope.subject[i]+" "
			}
			$scope.total+=$scope.grade[i]*$scope.weight[i];
		}

		$scope.SGPA=$scope.total/(30);

		data.SGPA=Math.round($scope.SGPA*10)/10;
		
		$window.location.href = '#/result';
	}

	$scope.reset=function(){
		$scope.grade=["10","10","10","10","10","10","10","10","10","10"];
	}
}]);
