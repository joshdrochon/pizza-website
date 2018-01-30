//business logic
function Pizza(size, toppings){
    this.size = size;
    this.toppings = toppings;
  }

//ui logic
WebFont.load({
  google: {
    families: ["Cookie:regular"]
  }
});

$(function(){

  $("#size-toppings").submit(function(event){
    event.preventDefault();

    var userSize = $("#size").val();
    var userToppings = [];

    $(".toppings-selected").text(""); //clears all appended list items

    $('input[name="toppings"]:checked').each(function(){
       //console.log(this.value);
       userToppings.push(this.value); //loops through each checked checkbox, grabs the value, and pushes into []
       $(".toppings-selected").append("<li>" + this.value + "</li>");
     });

    var userPizza = new Pizza(userSize, userToppings);

    console.log(userPizza);

    Pizza.prototype.calcPrice = function(){

      let s = userPizza.size;
      let l = userToppings.length;

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

    let numString = userPizza.calcPrice().toFixed(2);  //toString();

    console.log(numString);
    console.log(typeof(numString));

    $(".total").text(numString);

    $("#summary").slideDown();

    $("#size-toppings")[0].reset(); //reset form to default

  });
});
