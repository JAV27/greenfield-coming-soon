function addAward(el, index) {
        
    $('.main.awards').append(`
        <div class="award">
            <p class="title">` + el.name + `</p>
            <div class="winner">
                <img src="images/` + el.winner.playercard + `" class="playercard">
                <div class="info">
                    <p class="name">#` + el.winner.num + ` ` + el.winner.name + `</p>
                    <p>` + el.winner.club + `</p>
                    <p>` + el.winner.hs + ` ('` + el.winner.class + `')</p>
                    <p>Positions: ` + el.winner.positions + `</p>
                </div>
            </div>
        </div>
    `);

}

$(document).ready(function() {

    $.getJSON("https://greenfieldleagues.com/data.json", function(data) {
        
        let awards = data.awards;

        awards.forEach(addAward); 
    
    });

});