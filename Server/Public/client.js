$(document).ready(init);

function init() {
  console.log("JQ");
  $(".js-new-form-submit").on("submit", ".js-btn-equal", submitInputs);
  $(".js-btn-clear").on("click", clearInputs);
}

//
//EVENT HANDLERS
// -------------

function submitInputs(event) {
  event.preventDefault();
  const newInput = {
    num1: $(".js-input-number1").val(),
    num2: $(".js-input-number2").val()
  };

  postInput(newInput);
}

function clearInputs() {
  $(".js-input-number1").val("");
  $(".js-input-number2").val("");
}

//
// API INTERACTIONS / AJAX CALLS
// -----------------------------

function postInput(inputData) {
  console.log(inputData);
  $.ajax({
    method: "POST",
    url: "/history",
    data: inputData
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {});
}
