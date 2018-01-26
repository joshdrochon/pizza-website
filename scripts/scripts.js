//business logic

function Pizza(size, toppings){

  this.pizzaSize = size;
  this.toppings = toppings;
}

var newPizza = new Pizza("medium", ["Green Peppers", "Sliced Tomatoes"]);

newPizza.size









//ui logic

$(document).ready(function(){
  $("#size-toppings").submit(function(event){
    event.preventDefault();

    var userSize = $("#size").val();

    var userToppings = [];

    $('input[name="toppings"]:checked').each(function(){
       //console.log(this.value);
       userToppings.push(this.value);
    });

    console.log(userSize);
    console.log(userToppings);

    // $('input[name="toppings"]:checked').each(function(){
    //    console.log(this.value);
    // }); //loops through each checked checkbox and logs its value


    $("#summary").show();

    $("#size-toppings")[0].reset(); //reset form to default

  });


});
