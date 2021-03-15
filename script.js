let questionList = [];
let rightAnswer = [];
let wrongAnswer = [];

questionList.push("현재 수행 중에 있는 명령어 코드를 저장하고 있는 임시 저장 장치는?");
rightAnswer.push("명령 레지스터");
wrongAnswer.push(new Array("인덱스 레지스터", "누산기", "메모리 레지스터"));

function randomNum(min, max){
	let randNum = Math.floor(Math.random()*(max-min+1)) + min;
	return randNum;
}

function writeQuestion(randomNumber){
	rightAnswerNumber = randomNum(0, 3);
	answer = rightAnswerNumber;

	console.log(rightAnswerNumber);
	questionText.innerHTML = questionList[randomNumber];
	textArray[0].innerHTML = rightAnswer[randomNumber];

	for(let i=0;i<4;i+=1){
		if(i < rightAnswerNumber){
			textArray[i].innerHTML = wrongAnswer[randomNumber][i];
			console.log(textArray[i]);
		}
		else if(i == rightAnswerNumber){
			textArray[i].innerHTML = rightAnswer[randomNumber];
			console.log(textArray[i]);
		}
		else{
			textArray[i].innerHTML = wrongAnswer[randomNumber][i-1];
			console.log(textArray[i]);
		}
	}
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

answer = 3;
let choiceNumber = 5;
let textArray = [];

for(let i = 0; i < 4; i+=1){
	str = "#text" + i;
	textArray.push(document.querySelector(str));
}


questionText = document.querySelector("#question");

let ranint = Math.floor(Math.random() * questionList.length);
writeQuestion(0);

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
document.querySelector("#nextButoon").onclick = function() {
	writeQuestion(0);
}

