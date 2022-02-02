player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1name;
document.getElementById("player2_name").innerHTML = player2name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn: "+player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn: "+player2name;

function send() {
    get_word = document.getElementById("word").value;
    lc_word = get_word.toLowerCase();
    console.log (lc_word);

    char1 = lc_word.charAt(1);
    console.log (char1);

    length_divide = Math.floor(lc_word.length/2);
    char2 = lc_word.charAt(length_divide);
    console.log (char2);

    length_minus = lc_word.length-1;
    char3 = lc_word.charAt(length_minus);
    console.log (char3);

    remove1 = lc_word.replace(char1,"_");
    remove2 = remove1.replace(char2,"_");
    remove3 = remove2.replace(char3,"_");
    console.log (remove3);

    question_word = "<h4 id = 'word_display'> Question:  "+remove3+"</h4>";
    input_box = "<br> Answer: <input type = 'text' id = 'input_check_box' >";
    new_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>CHECK </button>";
    combine = question_word+input_box+new_button;
    document.getElementById("output").innerHTML = combine;
    document.getElementById("word").value = " ";

}


