var string = "Marbles is a sonic youth";
var que = " ";
var randomizer= " ";
		
for (var i = string.length; i>=0; i--) {
	
	   	
      
	   switch (string[i]) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			break;	
		case "y":
			randomizer = Math.floor(6 * Math.random());
			if(randomizer >3){
			  que = que + string[i];

			}
			
		break;
		
		default:
			que = que + string[i];
			break;
			
		
	};
 }
 console.log(que);


 		
