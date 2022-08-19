player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send() {
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    real_answer = parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    answer = document.getElementById("input_check_box").value;

    if (answer == real_answer) {
        if(answer_turn == "player1") {
            new_player1_score = player1_score + 1;
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
        }
        else {
            new_player2_score = player2_score + 1;
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}