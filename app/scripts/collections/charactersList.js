/*global RpgGenerator, Backbone*/

RpgGenerator.Collections = RpgGenerator.Collections || {};

(function () {
    'use strict';

    RpgGenerator.Collections.CharactersList = Backbone.Collection.extend({

        model: RpgGenerator.Models.Character

    });

})();
