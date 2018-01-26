//business logic

function Pizza(size, toppings){

  this.size = size;
  this.toppings = toppings;

}

//ui logic

$(document).ready(function(){
  $("#size-toppings").submit(function(event){
    event.preventDefault();

    var userSize = $("#size").val();
    var userToppings = [];

    $('input[name="toppings"]:checked').each(function(){
       //console.log(this.value);
       userToppings.push(this.value); //loops through each checked checkbox, grabs the value, and pushes into array
    });

    var userPizza = new Pizza(userSize, userToppings);

    console.log(userPizza);

    $("#summary").show();

    $("#size-toppings")[0].reset(); //reset form to default

  });
});
