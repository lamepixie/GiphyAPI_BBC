// our initial array of actor choices
var actors = ["Rik Mayall","Richard Ayoade","Jennifer Saunders","Noel Fielding","Karl Pilkington"];

// this function will loop through our array, creating a button for every index
function createButtons() {
    // first we want to empty our div to avoid duplicate buttons
    $("#button-div").empty();
    // creating our loop to create buttons dynamically using jQuery
    for (var i = 0; i < actors.length; i++) {
        // creating a button tag
        $("<button>")
        // gives the button the cass of actor
        .addClass("actor")
        // assigns a data name to the button from the array
        .attr("data-name", actors[i])d 
        // puts text on the button
        .text(actors[i])
        // sends the button to our alotted div id in the HTML
        .appendTo("#button-div");
    }
};
// end of our createButtons function

// this function will fetch our relevant gifs from the Giphy API!
function displayGif() {
    // emptying their container first, just like with the buttons, to avoid endlessly adding gifs to the page
    $("#gif-container").empty();
    // grabs our string from the index to query the API
    var actor = $(this).attr("data-name");
    // our API URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=PnRghM1fmuk1s4qUMg2O01Cv29hh75B7&limit=10";

    // Ajax to the rescue!
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

    // loops through the gifs pulled back, up to the limit of 10 that was hard coded into our queryURL
    for (var i = 0; i < response.data.length; i++) {
        // creates a div for each response
        $("<div>")
        // adds a class to the div to help us style in css
        .addClass("gif-div")
        // assigns an ID so we can push our images into the div later
        .attr("id", "actor" + i)
        // displays the gif rating in the div
        .html("<p>Rating: " + response.data[i].rating + "</p>")
        // send it out to the HTML to display dynamically
        .appendTo("#gif-container");
        // creates an image tag for each gif
        $("<img>")
        // pulls the src url so the image can be displayed
        .attr({"src": response.data[i].images.fixed_width.url})
        // assigning it a class
        .addClass("actor-image")
        // sending it into the div we just created above
        .prependTo("#actor" + i);
        }
    })
};
// end of our displayGif function

$(document).ready(function () {
    // function for a user to add their own button into our actors array
    $("#add-button").click(function (e) {
        e.preventDefault();
        // pulls the string input by the user and trims away spaces
        var actor = $("#actor-input").val().trim();
        // clears our text input box
        $("#actor-input").val("");
        // pushes the user's input into our previously defined array
        actors.push(actor);
        // calls the createButtons function to get a new button made so we can query this new string!
        createButtons();
    })

    // calls the function that pulls the gifs from the API once a button has been selected by the user
    $(document).on("click", ".actor", displayGif);

    // calls the function to create our buttons on page load
    createButtons();

});