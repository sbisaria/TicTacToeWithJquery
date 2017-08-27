var i,j;
var HorizontalCondition = function(currentMarker) {
	for (i=0;i<3;i++) {
       var count=0;
       for (j=0;j<3;j++) {
          if($("#button"+i+j).val() == currentMarker)
          	count+=1;
          else {
          	count=0;
          	break;
          }
       }
       if(count===3)
       {
            return true;
       }
    }
}

var VerticalCondition = function(currentMarker){
	for (i=0;i<3;i++) {
       var count=0;
       for (j=0;j<3;j++) {
          if($("#button"+j+i).val() == currentMarker)
          	count+=1;
          else {
          	count=0;
          	break;
          }
       }
       if(count===3)
       {
            return true;
       }
    }
}

var LeftDiagonalCondition = function(currentMarker) {
	var count=0;
	for (i=0;i<3;i++) {
      if($("#button"+i+i).val() == currentMarker)
      	count+=1;
      else {
      	count=0;
      	break;
      }
    }
   if(count===3)
   {
        return true;
   }
}

var RightDiagonalCondition = function(currentMarker) {
	var count=0;
	for (i=0,j=2;i<3;i++,j--) {
      if($("#button"+i+j).val() == currentMarker)
      	count+=1;
      else {
      	count=0;
      	break;
      }
    }
   if(count===3)
   {
        return true;
   }
}