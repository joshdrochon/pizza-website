//business logic












//ui logic

$(document).ready(function(){
  $("#size-toppings").submit(function(event){
    event.preventDefault();

    var userSize = $("#size").val();

    console.log(userSize);

    $('input[name="toppings"]:checked').each(function() {
       console.log(this.value);
    });


    $("#summary").show();

  });


});
