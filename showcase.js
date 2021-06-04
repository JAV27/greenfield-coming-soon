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

    $('.showcase .row').remove();
    $('.showcase').append('<div class="row"></div>')

    let search = $('.nav input').val().toLowerCase().replace(/\s+/g, '');
    console.log(search);

    $.getJSON("https://greenfieldleagues.com/players.json", function(data) {
        
        let players = data.players;

        players.forEach(function(el, index) {
            let name = el.name.toLowerCase().replace(/\s+/g, '');

            if(name.indexOf(search) >= 0) {
                addPlayerCard(el, index)
            }

        });
    
    });
    
    // $('.card.player').each(function() {
    //     let name = $(this).children('.card-body').children('.card-title').text().toLowerCase().replace(/\s+/g, '');

    //     if(name == search) {
    //         console.log(name)
    //     }

    // });
}

$(document).ready(function() {

    $.getJSON("https://greenfieldleagues.com/players.json", function(data) {
        
        let players = data.players;

        players.forEach(addPlayerCard); 
    
    });

    $('.nav button').on('click',search_players)

    $(document).on("keypress", "input", function(e){
        if(e.which == 13){
            var inputVal = $(this).val();
            search_players()
        }
    });


});