var phrase = "Marbles is a chicken";
var que = " ";

var randomizer= " ";
		

	
	   function vowelizer (string){
	   	 
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
 };

 return console.log(que);
}

vowelizer(phrase)
