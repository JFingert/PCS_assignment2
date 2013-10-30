
var string = "Marbles is a chicken";
var que = "";



		
for (var i = string.length; i>=0; i--){
      
	   

	  if (string[i]!= "a" && string[i]!= "e" && string[i]!= "i" && string[i]!= "o" && string[i]!= "u"){
	    
	    que = que + string[i];

	    
	   }


 		

 }
 console.log(que + string[i]);
=======

var string = "Marbles is a chicken";
var que = "";
		
for (var i = string.length; i>=0; i--) {
      
	   switch (string[i]) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
		case "y":
			break;
		default:
			que = que + string[i];
			break;
	};
 }
 console.log(que);