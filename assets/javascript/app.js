const API_KEY = "&api_key=PnRghM1fmuk1s4qUMg2O01Cv29hh75B7";

var actors = ["Rik Mayall", "Richard Ayoade", "Aisling Bea", "Noel Fielding", "Katherine Ryan", "Jimmy Carr"];

var rating = ["g","pg-13"];
var limitDefault = 10;

/*
function displayGiphy() {

    var actor = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=PnRghM1fmuk1s4qUMg2O01Cv29hh75B7";

// our magical AJAX call 
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

*/
$(function createButton(){
// This function will create our buttons from the array of actors
// function createButton() { 
    // clears old buttons before adding new ones to avoid duplicates
    $("#button-div").empty();
    // looping through our topic array to create the buttons
    for (var i = 0; i < actors.length; i++) {
        // dynamically creates buttons on the DOM through jQuery
        var a = $("<button>");
        // adds a class to our new button
        a.addClass("actor-btn");
        // adds a data attribute
        a.attr("data-name", actors[i]);
        // this is how the computer knows what to write on the button
        a.text(actors[i]);
        // putting the button on the DOM
        $("#button-div").append(a);
    }
})

    // this enables us to create new buttons into our array of actors based on user input
    $("#add-button").click(function(event) {
        event.preventDefault();
        // this line grabs the user input from the text box and trims it
        var actor = $("#actor-input").val().trim();
        // pushes a new actor into the actors array
        actors.push(actor);
        // calling our button creation function to manipulate the DOM
        createButton();
      });
      // adding an event listener to all elements with a class of "actor-btn"
      $(document).click(".actor-btn", displayGiphy);
      // calling our createButton function to render the initial buttons
      renderButtons();
    