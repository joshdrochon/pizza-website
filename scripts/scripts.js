//business logic


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

    function Pizza(size, toppings){
        this.size = size;
        this.toppings = toppings;
      }


    var userPizza = new Pizza(userSize, userToppings);

    Pizza.prototype.calcPrice = function(){

      var sm = 14;
      var md = 18;
      var lg = 22;

      for(let i = 0; i<=userToppings.length; i++){
        if(userPizza.size == "small"){
          sm += 1.50;
          return sm;
        }else if(userPizza.size == "medium"){
          md += 1.50;
          return md;
        }else{
          lg += 1.50;
          return lg;
        }
      }

      //return sm;
    };


    //console.log(userPizza);

    console.log(userPizza.calcPrice());

    $("#summary").show();

    $("#size-toppings")[0].reset(); //reset form to default

  });
});
