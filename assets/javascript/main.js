
// creating my Array of celebrities
var celebrityArray = ["Elon Musk", "Bill Gates", "Linus Torvalds", "Michael Jordan", "Minions"];

$(document).ready(function() {
    for (var i = 0; i < celebrityArray.length; i++) {
        $("#celebrity-buttons").append("<button type='button' onclick='searchGif(\"" + celebrityArray[i] + "\")' class='btn btn-primary' value=' " + celebrityArray[i] + "'> " + celebrityArray[i] + " </button>");
    }
});

function celebrityButtonClicked() {
    var userInput = $('#celebrity-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#celebrity-input').val();

    if (userInput) {
        $('#celebrity-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=dc6zaTOxFJmzC',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}


}
