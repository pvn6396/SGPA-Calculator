app.controller('ResultController', ['$scope','data','$window', function($scope,data,$window){
	$scope.SGPA=data.SGPA
	$scope.wid=($scope.SGPA*10).toString()+"%";

	// Showing Back Subject
	$scope.backSubName=data.backSubName
	if($scope.backSubName=="")
		$scope.hasBack=false
	else
		$scope.hasBack=true

	$(".again").hide();

	//to show motion progress bar 
	$( ".progress-bar" ).animate({
	   width: $scope.wid
	}, {
	   duration: 8000,// It controls the time duration
	   complete:function(){
	   		$(".again").show(2000);
	   		$("#marks").addClass("blink");
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
		     $("#marks").removeClass('text-danger');
		     $("#marks").addClass('text-warning');
	      } else if (now < 75) {
		     $(this).addClass('progress-bar-info');
		     $("#marks").removeClass('text-warning');
		     $("#marks").addClass('text-info');
		  } else {
		     $(this).addClass('progress-bar-success');
		     $("#marks").removeClass('text-info');
		     $("#marks").addClass('text-success');
	      }
	      $("#marks").html(Math.round(now)/10)
	   }
	});
	
	//to calculate again
	$scope.back=function(){
		$window.history.back();
	}

}]);
