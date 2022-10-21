var resultContainer = document.getElementById("results");

$.get("https://v2.jokeapi.dev/joke/programming", function (data) {
  console.log(data);
  console.log(data.joke); // take a look at the data sent back

  if (data.type === "single") {
    // looks like what we need is in data.joke
    var jokeFromData = data.joke;

    // create an new HTML element to hold our trivia question text
    var newHTMLElement = document.createElement("p");

    // add the text in from the question to our new HTML element
    newHTMLElement.innerText = jokeFromData;

    // add the new html element to our webpage
    resultContainer.appendChild(newHTMLElement);

    // continue until all the questions are added to the DOM
  } else if (data.type === "twopart") {
    // looks like what we need is in data.joke
    var jokeSetupFromData = data.setup;
    var jokeDeliveryFromData = data.delivery;

    // create an new HTML element to hold our trivia question text
    var newHTMLElement = document.createElement("p");

    // add the text in from the question to our new HTML element
    newHTMLElement.innerText = jokeSetupFromData + " \n" + jokeDeliveryFromData;

    // add the new html element to our webpage
    resultContainer.appendChild(newHTMLElement);

    // continue until all the questions are added to the DOM
  }
});
