// Get all the multiple-choice questions in the page
var questions = document.querySelectorAll(".mcq_option_control");

// Loop through all the questions
for (var i = 0; i < questions.length; i++) {
  // Get all the options for the current question
  var options = questions[i].querySelectorAll("input[type='radio']");

  // Loop through all the options and select the first one
  for (var j = 0; j < options.length; j++) {
    if (options[j].checked) {
      // If an option is already checked, continue to the next one
      continue;
    }
    options[j].checked = true;
    break;
  }
}
/*answers all questions in mcq list*/
/*need to manually change class*/
