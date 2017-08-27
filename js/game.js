
var currentMarker = 'X'
var chanceCount = 0;

$("input[type='button']").click(function(){
	PlaceAndUpdateMarker(this);
});

$("#reset").click(function(){
	$("#result").hide();
	$('input[type="button"]').prop("disabled", false);
	$('input[type="button"]').val("");
	chanceCount = 0;
	currentMarker = "X";
});

var PlaceAndUpdateMarker = function(button){
	$(button).val(currentMarker);
	$(button).prop("disabled",true);
	var isWinner = CheckWinningConditions(currentMarker);
	chanceCount++;
	if(isWinner===true)
	{
		var msg = currentMarker + " is the winner";
		DisplayResult(msg);
	}
    else if(chanceCount == 9){
		DisplayResult("Its a draw..!!!");
	}
	UpdateMarker();
}

var UpdateMarker = function(){
	if(currentMarker=="X")
		currentMarker = "O";
	else
		currentMarker = "X";
}

var CheckWinningConditions = function(currentMarker){
	if(HorizontalCondition(currentMarker)===true)
		return true;
	else if(VerticalCondition(currentMarker)===true)
		return true;
	else if(LeftDiagonalCondition(currentMarker)===true)
		return true;
	else if(RightDiagonalCondition(currentMarker)===true)
		return true;
}

var DisplayResult = function(msg){
	$("#result").html(msg);
	$("#result").show();
	$('input[type="button"]').prop("disabled",true);
}