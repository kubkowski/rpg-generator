'use strict'

describe('RPG Helper', function () {

    describe ('Dice', function () {

        it ('should return correct values', function () {
            expect(dice(1)).to.equal(1);
            expect(dice(4)).to.be.within(1, 4);
            expect(dice(6)).to.be.within(1, 6);
            expect(dice(10)).to.be.within(1, 10);
            expect(dice(20)).to.be.within(1, 20);
            expect(dice(100)).to.be.within(1, 100);
        });

    });

    describe ('Dices', function () {

        it ('should correctly count dices', function () {
            expect(dices(3, 1, 0)).to.equal(3);
            expect(dices(3, 6, 0)).to.be.within(3, 18);
            expect(dices(1, 100, 0)).to.be.within(1, 100);
        });

        it ('should correctly add modifiers', function () {
            expect(dices(1, 1, 1)).to.equal(2);
            expect(dices(3, 1, 1)).to.equal(4);
            expect(dices(2, 6, 10)).to.be.within(12, 22);
        });

    })

});