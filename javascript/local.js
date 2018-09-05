function CheckResult()
{
    var checkbox = document.getElementsByName("quiz_1_4");
    var score = 0;
    if (checkbox[0].checked == true) {
        score++;
    }

    checkbox = document.getElementsByName("quiz_2_3");
    if (checkbox[0].checked == true) {
        score++;
    }

    checkbox = document.getElementsByName("quiz_3_2");
    if (checkbox[0].checked == true) {
        score++;
    }

    checkbox = document.getElementsByName("quiz_4_1");
    if (checkbox[0].checked == true) {
        score++;
    }

    checkbox = document.getElementsByName("quiz_5_3");
    if (checkbox[0].checked == true) {
        score++;
    }

    var d = document.getElementsByName("quiz_div");
    d[0].remove();

    d = document.getElementsByName("result_div");
    d[0].style.visibility = "visible";
    d[0].innerHTML = "Congratulations! Your socre: " + (score * 100 / 5).toString() + "%" + ". Now you have more knowledge of fruit grading!";

    var button = document.getElementsByName("button_submit");
    button[0].remove();
    button[0].remove();

    button = document.getElementsByName("button_ref");
    button[0].style.visibility = "visible";

    return;
}