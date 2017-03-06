app.controller('CalTCController', ['$scope', function($scope){
	$(".pro-bar").hide();
	$(".again").hide();
	$scope.subject=["Applied Mathematics 2","Physics Theory","Physics Practical","ED Theory","ED Practical","Electrical Theory","Electrical Practical","Programming Theory","Programming Practical","Humanities","Comphrensive Viva"];
	$scope.grade=["10","10","10","10","10","10","10","10","10","10","10"];
	$scope.weight=["4","4","1","3","2","4","1","4","1","2","4"];

	$scope.SGPA=0;


	$scope.cal=function(){

		$scope.toggleVisibilty(); // To hide Buttons and show Bar.

		$scope.total=0;
		$scope.hasBack=false;
		$scope.backSubName=""

		for(i=0;i<11;i++){
			if($scope.grade[i]==0)
			{
				$scope.hasBack=true;
				$scope.backSubName+=$scope.subject[i]+" "
			}
			$scope.total+=$scope.grade[i]*$scope.weight[i];
		}

		$scope.SGPA=$scope.total/(30);
		$scope.SGPA=Math.round($scope.SGPA*10)/10;
		$scope.wid=$scope.SGPA*10;
		$scope.animate($scope.wid.toString()+"%");
	}

	$scope.animate=function(wid){

		$( ".progress-bar" ).animate({
		   width: wid
		}, {
		   duration: 5000,// It controls the time duration
		   complete:function(){
		   		$(".progress-bar").text($scope.SGPA +" CGPA")
		   		$(".again").show(2000);
		   	},
		   	/* It Changes Color of strip */
		   step: function( now, fx ) {
		  	      $(this).removeClass (function (index, css) {
			     return (css.match (/(^|\s)progress-bar-\S+/g) || []).join(' ');
		      });
		  	      if (now < 33) {
		  		     $(this).addClass('progress-bar-danger');
		      } else if (now < 60) {
			     $(this).addClass('progress-bar-warning');
		      } else if (now < 75) {
			     $(this).addClass('progress-bar-info');
			  } else {
			     $(this).addClass('progress-bar-success');
		      }
		   }
		});
	}//function Over

	$scope.toggleVisibilty=function(){
		$(".btn-cal").toggle(500);
		$(".pro-bar").toggle();
	}

	$scope.reset=function(){
		$scope.grade=["10","10","10","10","10","10","10","10","10","10","10"];
		$(".btn-cal").show();
		$(".pro-bar").hide();
		$(".progress-bar").css("width","0%");
		$(".progress-bar").text("");
	}
}]);
