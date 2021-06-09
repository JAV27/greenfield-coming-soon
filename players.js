function addTeam(el, index) {
    
    let players = ``;

    el.players.forEach(function(el, index) {
        players += `
        <div class="player">
            <img src="images/` + el.img + `">
            <div class="info">
                <p class="name"> #` + el.num + ` ` + el.name + `</p>
                <p>` + el.club + `</p>
                <p>` + el.hs + ` ('` + el.class + `')</p>
                <p>Positions: ` + el.positions + `</p>
            </div>
        </div>
    `;
    });
    
    $('.main.players .teams').append(`
        <div class="team">
            <div class="top">
                <img src="images/` + el.img + `" alt="">
                <p>` + el.name + `</p>
            </div>
            <hr>
            <div class="body">
            ` + players + `
            </div>
        </div>
    `);

}

$(document).ready(function() {

    $.getJSON("https://greenfieldleagues.com/data.json", function(data) {
        
        let teams = data.teams;

        console.log(teams)

        teams.forEach(addTeam); 
    
    });

});