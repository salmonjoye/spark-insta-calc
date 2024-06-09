$(document).ready(function () {
  resetValues(0)
});

let totalPoints = 0


$("#calculate").click(function(){

    let totalViews = parseInt($('#floatingInputViews1').val())+parseInt($('#floatingInputViews2').val())+parseInt($('#floatingInputViews3').val())+parseInt($('#floatingInputViews4').val())+parseInt($('#floatingInputViews5').val())+parseInt($('#floatingInputViews6').val())+parseInt($('#floatingInputViews7').val())
    let totalLikes = parseInt($('#floatingInputLikes1').val())+parseInt($('#floatingInputLikes2').val())+parseInt($('#floatingInputLikes3').val())+parseInt($('#floatingInputLikes4').val())+parseInt($('#floatingInputLikes5').val())+parseInt($('#floatingInputLikes6').val())+parseInt($('#floatingInputLikes7').val())
    let totalComments = parseInt($('#floatingInputComments1').val())+parseInt($('#floatingInputComments2').val())+parseInt($('#floatingInputComments3').val())+parseInt($('#floatingInputComments4').val())+parseInt($('#floatingInputComments5').val())+parseInt($('#floatingInputComments6').val())+parseInt($('#floatingInputComments7').val())
    let totalShares = parseInt($('#floatingInputShares1').val())+parseInt($('#floatingInputShares2').val())+parseInt($('#floatingInputShares3').val())+parseInt($('#floatingInputShares4').val())+parseInt($('#floatingInputShares5').val())+parseInt($('#floatingInputShares6').val())+parseInt($('#floatingInputShares7').val())
    let points = totalViews+totalLikes/5+totalComments*7+totalShares*2
    let bonusPoints = 500*(parseInt(parseInt($('#floatingInputViews1').val())/5000)+parseInt(parseInt($('#floatingInputViews2').val())/5000)+parseInt(parseInt($('#floatingInputViews3').val())/5000)+parseInt(parseInt($('#floatingInputViews4').val())/5000)+parseInt(parseInt($('#floatingInputViews5').val())/5000)+parseInt(parseInt($('#floatingInputViews6').val())/5000)+parseInt(parseInt($('#floatingInputViews7').val())/5000))
    totalPoints = points + bonusPoints;

    $("#totalViews").html("Total Views: "+totalViews+" ("+parseInt(totalViews+bonusPoints)+" points)");
    $("#totalLikes").html("Total Likes: "+totalLikes+" ("+parseInt(totalLikes/5)+" points)");
    $("#totalComments").html("Total Comments: "+totalComments+" ("+parseInt(totalComments*7)+" points)");
    $("#totalShares").html("Total Shares: "+totalShares+" ("+parseInt(totalShares*2)+" points)");
    $("#totalPoints").html("Total Points: "+totalPoints);


  });

  $('input').focus(function(){
    if($(this).val()==0){
      $(this).val("")
    }
  })

  $('input').blur(function(){
 if($(this).val()===""){
  $(this).val(0)
 } 
  })

  $("#clear").click(function(){
    resetValues()
  });

  function resetValues(i){
    $('input').val(i)
    $("#totalViews").html("Total Views: ");
    $("#totalLikes").html("Total Likes: ");
    $("#totalComments").html("Total Comments: ");
    $("#totalShares").html("Total Shares: ");
    $("#totalPoints").html("Total Points: ");
  }

  function goToURL(){
    let captain = $("#captain option:selected").text()
    let support = $("#support option:selected").text()

    if(captain === "Select Captain Branch"){
alert("Select Captain Branch");
    }
    else if(support === "Select Supporting Branch"){
      alert("Select Supporting Branch");
    }
    else{
    let message = `Captain Branch: ${captain} %0ASupport Branch: ${support} %0ATotal Points: ${totalPoints}`
    message = message.replace(/ /g,"%20")
    let link = "whatsapp://send?text="+message

    console.log(link)

    location.href = link
    }
  }