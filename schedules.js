function addDay(el, index) {
   
    let games = ``;

    el.games.forEach(function(el, index) {
        games += `
        <div class="game">
            <div class="team1">
                <p>` + el.team1 + `</p>
                <img src="images/` + el.img1 + `">
            </div>
            <div class="time">
                <p>` + el.time + `</p>
            </div>
            <div class="team2">
                <img src="images/` + el.img2 + `">
                <p>` + el.team2 + `</p>
            </div>
        </div>
    `;
    });

    $('.main.schedule .days').append(`
        <div class="day">
            <p class="day">` + el.date + `</p>
            <div class="games">    
            ` + games + `           
            </div>
        </div>
    `);

}

$(document).ready(function() {

    $.getJSON("https://greenfieldleagues.com/data.json", function(data) {
        
        let days = data.schedules;

        console.log(days);

        days.forEach(addDay); 
    
    });

});