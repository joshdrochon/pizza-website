//business logic


//ui logic

$(function(){
  $("#size-toppings").submit(function(event){
    event.preventDefault();

    var userSize = $("#size").val();
    var userToppings = [];

    $('input[name="toppings"]:checked').each(function(){
       //console.log(this.value);
       userToppings.push(this.value); //loops through each checked checkbox, grabs the value, and pushes into array
       $(".toppings-selected").append("<li>" + this.value + "</li>");

    });

    function Pizza(size, toppings){
        this.size = size;
        this.toppings = toppings;
      }

    var userPizza = new Pizza(userSize, userToppings);

    //console.log(userPizza);

    Pizza.prototype.calcPrice = function(){

      let s = userPizza.size;
      let l = userToppings.length;

      //console.log(s);
      //console.log(l);

      if(s === "small"){
        var p = 14 + l * 1.5;
        return p;
      }else if(s === "medium"){
        var p = 18 + l * 1.5;
        return p;
      }else{
        var p = 22 + l * 1.5;
        return p;
      }

    }; //end calcPrice


    $(".total").text(userPizza.calcPrice());

    $("#summary").show();

    $("#size-toppings")[0].reset(); //reset form to default

  });
});
