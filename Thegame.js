alert('Are you ready?');
	alert('This game you can only answer with left or right!! Good luck!:)')
		
	var begin = prompt('Wich way do you want to go?');

	

	if(begin == 'left') {
	var cave = prompt ('you are in an cave left you see lights and on the right you see nothing?Wich way are you going?');
	}
	if(begin == 'right') {
	var berg = prompt ('you are on a mountain you have 2 options or you go to the right and you come up on the mountain or you go to the left and you go further down ');
		

	}
	else if (berg == 'right'){
 			var grot = prompt ('you have entered a very long tunnel with several corridors where do you want to go? to the left or right?');

	}

	else{
 	var berg = prompt ('you are on a mountain you have 2 options or you go to the right and you come up on the mountain or you go to the left and you go further down ');
 		}
	
	if (cave == 'left') {
		var rivier = prompt ('you have arrived at a river on the left is a bridge and on the right you can swim to the other side');	
	}
	else {
		var weg = prompt ('you have found a way and now you see the road you are outside you see a bridge on the far left and you see a boat on the right. which way are you going?');
	}
	if (rivier == 'left'){
		alert('the bridge broke when you stood on it and you fell dead on the stones');
	}
		if (weg == 'right') {
		alert('you have gone to the boat to the other side and you see the end and you have made it. Congratulations');
	}

	else {
	alert('you were almost there but the water drowned you!');	
	}
	if (weg == 'left'){
		alert('this bridge has collapsed unfortunate!');
	}

	