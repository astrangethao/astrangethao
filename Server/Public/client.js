let operator;
let history;

$(document).ready(init);

function init() {
  $(".js-btn-data-equals").on("click", submitInputs);
  $(".js-btn-data-operation").on("click", function(event) {
    operator = event.target.innerHTML;
  });
  $(".js-btn-data-clear").on("click", clearInputs);
}

//
//EVENT HANDLERS
// -------------
function clearInputs() {
  $(".js-input-number1").val("");
  $(".js-input-number2").val("");
}

function submitInputs() {
  const newInput = {
    num1: $(".js-input-number1").val(),
    num2: $(".js-input-number2").val(),
    operator: operator,
    total: ""
  };

  postInput(newInput);
}

//
// API INTERACTIONS / AJAX CALLS
// -----------------------------

function postInput(inputData) {
  $.ajax({
    method: "POST",
    url: "/inputs",
    data: inputData
  })
    .then(response => {
      console.log(response);
      getHistory();
    })
    .catch(err => {
      console.log(err);
      console.warn("Whoops! Something went wrong in the get request!");
    });
}

function getHistory() {
  $.ajax({
    type: "GET",
    url: "/inputs"
  })
    .then(response => {
      history = response;
      console.log(history);
      render();
    })
    .catch(err => {
      console.log(err);
      console.warn("Whoops! Something went wrong in the get request!");
    });
}

//
// RENDER
// -------

function render() {
  console.log("render");
  $(".js-list-record").empty();
  for (let i = 0; i < history.length; i++) {
    let result = history[i];
    $(".js-list-record").append(`
    <li>${result.num1} ${result.operator} ${result.num2} = ${result.total}</li>
    `);
  }

  const lastIndex = history[history.length - 1];
  if (lastIndex != undefined) {
    $(".js-expression-result").empty();
    $(".js-expression-result").append(`
    <h2> ${lastIndex.total} </h2>
    `);
  }
}
