var questions = document.querySelectorAll(".mcq_option_control");
for (var i = 0; i < questions.length; i++) {
  var options = questions[i].querySelectorAll("input[type='radio']");
  for (var j = 0; j < options.length; j++) {
    if (options[j].checked) {
      continue;
    }
    options[j].checked = true;
    break;
  }
}
const element = document.querySelector('[value="提交"]'); element.click();
