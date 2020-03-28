$(document).ready(init);

function init() {
  console.log("JQ");
  $(".js-btn-data-equals").on("click", submitInputs);

  $(".js-btn-data-operation").on("click", function(e) {
    let oper = e.target.innerHTML;
    console.log(oper);

    handleOperator(oper);
  });

  $(".js-btn-data-clear").on("click", clearInputs);
}

let num1;
let num2;
let operator;
let total;
//
//EVENT HANDLERS
// -------------

function handleOperator(oper) {
  operator = oper;
}

function submitInputs(event) {
  event.preventDefault();
  const newInput = {
    num1: parseFloat($(".js-input-number1").val()),
    num2: parseFloat($(".js-input-number2").val()),
    operator: operator
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
