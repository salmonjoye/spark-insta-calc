$("button").click(function(){

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