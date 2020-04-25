function rpsGame(yourChoice){
    var humanChoice=yourChoice.id;
    var botChoice= numberChoice(randomToInt());
    console.log("Computer chose: "+ botChoice);
    var score=decideWinner(humanChoice,botChoice);
    console.log(score);    
    var message=finalMessage(score);
    console.log(message);
    frontEnd(humanChoice,message,botChoice);
}
//get computer to choose between rock, paper and scissors at random
function randomToInt(){
    return Math.floor(Math.random()*3);
}
function numberChoice(number){
    return ['rock','paper','scissors'][number]
}
//get computer to know the evaluate the results from the human and its random choice
function decideWinner(yourChoice,computerChoice){
    rpsDatabase={
        'rock': {'rock':0.5, 'paper':0,'scissors':1},
        'paper': {'rock':1, 'paper':0.5,'scissors':0},
        'scissors': {'rock':0, 'paper':1,'scissors':0.5}
    }
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore]
}
//comment depending on the result
function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return { 'message':'You Lost!','color':'red'};
    } else if (yourScore === 0.5){
        return{'message':'You Tied!','color':'yellow'};
    }else {
        return {'message':'You Won!','color':'green'};
    }

}
function frontEnd(humanImageChoice,finalMessage,botImageChoice){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv= document.createElement('div');
    var messageDiv= document.createElement('div');
    var botDiv= document.createElement('div');
    var button=document.createElement('button');

    humanDiv.innerHTML= "<img src='" + imageDatabase[humanImageChoice] + "' height= 350px width= 350px style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML= "<h1 style= color:" + finalMessage['color']+ " padding: 40px>"+ finalMessage['message']+"</h1>"
    botDiv.innerHTML= "<img src='" + imageDatabase[botImageChoice] + "' height= 350px width= 350px style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    button.innerHTML="<button onclick='reset()' class='btn btn-success' style='border-radius: 10px;' >Reset This Game</button>"



    document.getElementById("flex-rps").appendChild(humanDiv);
    document.getElementById("flex-rps").appendChild(messageDiv);
    document.getElementById("flex-rps").appendChild(botDiv);
    document.getElementById("flex-2").appendChild(button);

}
function reset(){
    window.location.reload();
}
