// show time
document.querySelector(".time").textContent = moment().format(
  "MMMM Do YYYY, h:mm:ss a"
);

// run time
setInterval(() => {
  // your code goes here
  document.querySelector(".time").textContent = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
}, 1000);

const data = JSON.parse(localStorage.getItem("data") || "[]");
console.log(data);

data.forEach((datum) => {
  // selected target element
  const query = `[data='`+ datum.hour +`']`
  const target = document.querySelector(query);
  const targetInput = target.querySelector(".input-area")
  // update the selected element's txt value
  targetInput.value = datum.text;
});

//document.querySelector(data).textContent= JSON.stringify(data.text);




var currentTime = moment().hour();

// test();
// function test(){
// const container = document.querySelector("#rectangle");
// const matches = container.querySelectorAll("#data");
// console.log(container);
// console.log(matches);
// }
backgroundColor();

function backgroundColor() {
  console.log("a");
  var rectangles = document.querySelectorAll(".rectangle");

  rectangles.forEach((rectangle) => {
    const id = parseInt(rectangle.getAttribute("data"));
    // compare determine color
    if (id < currentTime) {
      rectangle.classList.add("pinkbkg");
    }
    if (id > currentTime) {
      rectangle.classList.add("greenbkg");
    }
  });
}

var buttons = document.querySelectorAll(".submit-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // get the data that already exists if it does otherwise []
    const data = JSON.parse(localStorage.getItem("data") || "[]");

    const hour = button.closest(".rectangle").getAttribute("data");

    const filteredData = data.filter((datum) => datum.hour !== hour);

    const text = button
      .closest(".rectangle")
      .querySelector(".input-area").value;
    // build data entry {}
    const dataEntry = {
      hour: hour,
      text: text,
    };

    // push the data into the data array
    filteredData.push(dataEntry);

    // set the local storage
    localStorage.setItem("data",JSON.stringify(filteredData));
  });
});
