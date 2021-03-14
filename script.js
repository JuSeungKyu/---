function asdf(inputArray){
	sr = new File.OpenText();
	while(true){
		let outputArray = [];
		for(let i = 0; i < 5; i+=1){
			input = file.ReadLine();
			if (input == null){
                     break; 
            }
			outputArray.push(input);
		}
		inputArray.push(outputArray);
	}
	return inputArray
}

function choice(input){
	choiceNumber = input;
	if(answer == choiceNumber){
		alert("정답입니다.");
	}
	else{
		alert("오답입니다.");
	}
}

let arr = [];
arr = asdf(arr)

answer = 3;
let choiceNumber = 5;
let textArray = [];

for(let i = 0; i < 5; i+=1){
	str = "#text" + i;
	textArray.push(document.querySelector(str));
}

document.querySelector("#choice0").onclick = function() {
	choice(0);
}
document.querySelector("#choice1").onclick = function() {
	choice(1);
}
document.querySelector("#choice2").onclick = function() {
	choice(2);
}
document.querySelector("#choice3").onclick = function() {
	choice(3);
}
document.querySelector("#choice4").onclick = function() {
	choice(4);
}

