# _Pirate Bay Pizza Co._

#### _Website for Pirate Bay Pizza Co 01/26/18_

#### By _**Josh Rochon**_

## Description

_The logic of this application can be described as follows:

User selects a size of pizza. User selects toppings. When they hit submit, the total price and toppings selected will be calculated and displayed at the bottom of the page. For the first input, jQuery simply grabs the value of the select element of small, medium, or large. For the second input, jQuery uses an each loop to check for all checked checkboxes and then grabs those values, and pushes them into an array. Both inputs are saved into variables which are passed into the Pizza object constructor. In order for the price to be calculated, a method is created for the Pizza prototype. The method has a for loop that runs for as many items are in the array which contains the toppings selected. When the loop runs, it checks whether the user has selected small medium or large, and adds 1.50 to that size's base price each time the loop runs. When the loop runs out of array elements to loop through, it stops, and the total is returned._

## Setup/Installation Requirements

* _Copy paste code into text editor_

* _Open console window to verify selections, if desired_

## Known Bugs

_In the working version there are no know bugs, and everything functions as intended._

## Support and contact details

_If you have any concerns email joshdrochon@gmail.com_

## Technologies Used

_Atom text editor, Terminal, Git, Github, HTML5, CSS, Bootstrap, JavaScript, jQuery, Ajax_

### License

*Licensed by Josh Rochon*

Copyright (c) 2018 **_Josh Rochon_**
