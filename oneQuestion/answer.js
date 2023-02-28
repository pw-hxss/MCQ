// Get all the options in the multiple-choice question
var options = document.querySelectorAll("input[type='radio']");

// Loop through all the options and select the first one
for (var i = 0; i < options.length; i++) {
  if (options[i].checked) {
    // If an option is already checked, continue to the next one
    continue;
  }
  options[i].checked = true;
  break;
}
