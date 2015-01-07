function dice (sides) {
    return Math.floor( Math.random() * sides + 1 );
};

function dices ( quantity, sides, modifier ) {
    var  count = 0;
    if ( quantity > 1 ) {
        for (var i = 0; i < quantity ; i++) {
            count += dice(sides);
        };
        return count + modifier;
    } else {
        return dice(sides) + modifier;
    };
}

