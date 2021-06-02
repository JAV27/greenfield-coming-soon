function addPlayerCard(el, index) {

    $('.main.showcase .row').append(`
    <div class="col-6 col-sm-4 col-lg-3">
        <div class="card player" style="text-align: center;">
            <img src="images/` + el.img + `" class="card-img-top" style="width: 25%; margin: auto;">
            <div class="card-body">
                <h5 class="card-title">` + el.name + `</h5>
                <p class="card-text">Stat 1: ` + el.stat1 + `</p>
                <p class="card-text">Stat 2: ` + el.stat2 + `</p>
                <a href="#" class="btn btn-primary">View Player Card</a>
            </div>
        </div>
    </div>
    `)

}

function search_players() {

    let search = $('.nav input').val().toLowerCase().replace(/\s+/g, '');

    $('.card.player').each(function() {
        let name = $(this).children('.card-body').children('.card-title').text().toLowerCase().replace(/\s+/g, '');

        if(name == search) {
            console.log(name)
        }

    });
}

$(document).ready(function() {

    $.getJSON("https://greenfieldleagues.com/players.json", function(data) {
        
        let players = data.players;

        players.forEach(addPlayerCard); 
    
    });

});