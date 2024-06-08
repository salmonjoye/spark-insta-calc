$(document).ready(function () {
  resetValues()
});


$("#calculate").click(function(){

    let totalViews = parseInt($('#floatingInputViews1').val())+parseInt($('#floatingInputViews2').val())+parseInt($('#floatingInputViews3').val())
    let totalLikes = parseInt($('#floatingInputLikes1').val())+parseInt($('#floatingInputLikes2').val())+parseInt($('#floatingInputLikes3').val())
    let totalComments = parseInt($('#floatingInputComments1').val())+parseInt($('#floatingInputComments2').val())+parseInt($('#floatingInputComments3').val())
    let totalShares = parseInt($('#floatingInputShares1').val())+parseInt($('#floatingInputShares2').val())+parseInt($('#floatingInputShares3').val())
    let points = totalViews+totalLikes/5+totalComments*7+totalShares*2
    let bonusPoints = 500*(parseInt(parseInt($('#floatingInputViews1').val())/5000)+parseInt(parseInt($('#floatingInputViews2').val())/5000)+parseInt(parseInt($('#floatingInputViews3').val())/5000))
    let totalPoints = points + bonusPoints;
    $("#totalViews").append(totalViews);
    $("#totalLikes").append(totalLikes);
    $("#totalComments").append(totalComments);
    $("#totalShares").append(totalShares);
    $("#totalPoints").append(totalPoints);


  });

  $("#clear").click(function(){
    resetValues()


  });

  function resetValues(i){
    $('#floatingInputViews1').val(i)
    $('#floatingInputViews2').val(i)
    $('#floatingInputViews3').val(i)
    $('#floatingInputViews4').val(i)

    $('#floatingInputLikes1').val(i)
    $('#floatingInputLikes2').val(i)
    $('#floatingInputLikes3').val(i)
    $('#floatingInputLikes4').val(i)

    $('#floatingInputComments1').val(i)
    $('#floatingInputComments2').val(i)
    $('#floatingInputComments3').val(i)
    $('#floatingInputComments4').val(i)

    $('#floatingInputShares1').val(i)
    $('#floatingInputShares2').val(i)
    $('#floatingInputShares3').val(i)
    $('#floatingInputShares4').val(i)
  }