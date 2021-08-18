username1_name=localStorage.getItem("username1");
username2_name=localStorage.getItem("username2");

document.getElementById("player1").innerHTML=username1_name + ":";
document.getElementById("player2").innerHTML=username2_name + ":";

player1=localStorage.getItem("username1");
player2=localStorage.getItem("username2");

document.getElementById("question_turn").innerHTML=player1 ;
document.getElementById("answer_turn").innerHTML=player2 ;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_ans= parseInt(number1) * parseInt(number2);

    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'"
    check_button="<br><br> <button onclick='check()' class='btn btn-success'>check</button>"
    row= question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
}

question_turn = "player1" ;
answer_turn = "player2" ;

function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer == actual_ans){
        if( answer_turn == "player2"){
            update_1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_1_score;
            document.getElementById("answer_turn").innerHTML =  player1;
        }

        else{
            update_2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_2_score;
            document.getElementById("answer_turn").innerHTML =  player2;
        }

        if(question_turn == "player1"){
            question_turn = "player2"
            document.getElementById("question_turn").innerHTML = player2;
        }
        else{
            question_turn = "player1"
            document.getElementById("question_turn").innerHTML = player1;
        }

        
    }