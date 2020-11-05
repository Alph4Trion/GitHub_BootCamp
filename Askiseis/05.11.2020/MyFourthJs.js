//Variable Declaration and assignement
let fruitype = prompt("Select a fruit to see it's price");
let price;

//Switch statement of fruits and their prices
switch(fruitype){
	case "Bananas":
    	 price = 0.99;
        break;
    case "Oranges":
    	  price = 0.79;
		break;
    case "Apples":
    	 price = 0.89;
        break;
    case "Cherries":
		 price = 2.99;
        break;
    case "Grapes":
    	 price = 3.99;
         break;
	default:
    	 price = "not a fruit!";
}

//Message of the result 
console.log("The price of "+ fruitype + " is " + price);



