function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "B") {
        correct++;
    }
    if (question2 == "G") {
        correct++;
    }
    if (question3 == "B") {
        correct++;
    }

    
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 2;
        window.scroll({
            top: 2500, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    if (correct > 0 && correct < 3) {
        score = 1;
        window.scroll({
            top: 2500, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    if (correct == 3) {
        score = 0;
        window.scroll({
            top: 2500, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    
}