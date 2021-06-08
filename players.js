$(document).ready(function() {

    $.getJSON("https://greenfieldleagues.com/players.json", function(data) {
        
        let players = data.players;

        console.log(players)
    
    });

});