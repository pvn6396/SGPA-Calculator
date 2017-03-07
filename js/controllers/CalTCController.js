app.controller('CalTCController', ['$scope', 'data','$window',function($scope,data,$window){
	$scope.subject=["Applied Mathematics 2","Physics Theory","Physics Practical","ED Theory","ED Practical","Electrical Theory","Electrical Practical","Programming Theory","Programming Practical","Humanities","Comphrensive Viva"];
	$scope.grade=["10","10","10","10","10","10","10","10","10","10","10"];
	$scope.weight=["4","4","1","3","2","4","1","4","1","2","4"];

	$scope.SGPA=0;


	$scope.cal=function(){


		$scope.total=0;
		$scope.hasBack=false;
		data.backSubName=""

		for(i=0;i<11;i++){
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
		$scope.grade=["10","10","10","10","10","10","10","10","10","10","10"];
	}
}]);
