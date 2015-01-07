'use strict'

describe('RPG Helper', function () {

    describe ('Dice', function () {
        it ('should return correct values', function () {
            var d6 = dice(6);
            expect(d6).to.be.within(1, 6);
        });
    });

});