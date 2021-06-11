function addTeam(el, index) {
    
    let players = ``;

    el.players.forEach(function(el, index) {
        players += `
        <div class="player">
            <img src="images/` + el.img + `">
            <div class="info">
                <p class="name"> #` + el.num + ` ` + el.name + `</p>
                <p>` + el.club + `</p>
                <p>` + el.hs + ` (` + el.class + `)</p>
                <p>Positions: ` + el.positions + `</p>
            </div>
        </div>
    `;
    });
    
    $('.main.players .teams').append(`
        <a id="` + el.abbv + `"><div class="team">
            <div class="top">
                <img src="images/` + el.img + `" alt="">
                <p>` + el.name + `</p>
            </div>
            <hr>
            <div class="body">
            ` + players + `
            </div>
            <div>
                <a href="#top">top</a>
            </div>
        </div></a>
    `);

}

function getDefaultScreen() {
    
    $.getJSON("https://greenfieldleagues.com/data.json", function(data) {
        
        let teams = data.teams;

        console.log(teams)

        teams.forEach(addTeam); 
    
    });

}

function addPlayer(el, index) {
    $('.players .teams').append(`
        <div class="player">
            <img src="images/` + el.img + `">
            <div class="info">
                <p class="name"> #` + el.num + ` ` + el.name + `</p>
                <p>` + el.club + `</p>
                <p>` + el.hs + ` ('` + el.class + `')</p>
                <p>Positions: ` + el.positions + `</p>
            </div>
        </div>
    `);
}

function search_players() {

    let search = $('.nav input').val().toLowerCase().replace(/\s+/g, '');

    if(search == "") {
        getDefaultScreen();
    }

    $('.players .teams').remove();
    $('.players').append('<div class="teams"></div>')

    $.getJSON("https://greenfieldleagues.com/data.json", function(data) {
            
        let teams = data.teams;

        teams.forEach(function(el, index) {
            let players = el.players;

            players.forEach(function(el, index) {

                let name = el.name.toLowerCase().replace(/\s+/g, '');

                if(name.indexOf(search) >= 0) {
                    addPlayer(el, index)
                }

            });

        });

        
    });

}

$(document).ready(function() {

    getDefaultScreen();    

    $('.nav button.search').on('click',search_players);

    $('.nav button.clear').on('click', function() {
        $('.players .teams').remove();
        $('.players').append('<div class="teams"></div>');
        $('.nav input').val("");
        getDefaultScreen()
    });

    $(document).on("keypress", "input", function(e){
        if(e.which == 13){
            var inputVal = $(this).val();
            search_players()
        }
    });

});
