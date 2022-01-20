
$("#btnsend").click(function () {

    // Calculates weight of each assignment
    var iAssignment = $("#assignments").val() * 0.55;
    var iGroupProject = $("#groupprojects").val() * 0.05;
    var iQuiz = $("#quizzes").val() * 0.1;
    var iExam = $("#exams").val() * 0.2;
    var iINTEX = $("#intex").val() * 0.1;

    // Calculates total percentage
    totalPercentage = iAssignment + iGroupProject + iQuiz + iExam + iINTEX

    // Assigns letter grade
    if (totalPercentage >= 94) {
        letterGrade = 'A'
    }
    else if (totalPercentage >= 90) {
        letterGrade = 'A-'
    }
    else if (totalPercentage >= 87) {
        letterGrade = 'B+'
    }
    else if (totalPercentage >= 84) {
        letterGrade = 'B'
    }
    else if (totalPercentage >= 80) {
        letterGrade = 'B-'
    }
    else if (totalPercentage >= 77) {
        letterGrade = 'C+'
    }
    else if (totalPercentage >= 74) {
        letterGrade = 'C'
    }
    else if (totalPercentage >= 70) {
        letterGrade = 'C-'
    }
    else if (totalPercentage >= 67) {
        letterGrade = 'D+'
    }
    else if (totalPercentage >= 64) {
        letterGrade = 'D'
    }
    else if (totalPercentage >= 60) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

    //Output

    alert("Final Percentage: " + totalPercentage + ", Letter Grade: " + letterGrade);
    
})
