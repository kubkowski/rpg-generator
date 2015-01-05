/*global RpgGenerator, Backbone*/

RpgGenerator.Collections = RpgGenerator.Collections || {};

(function () {
    'use strict';

    RpgGenerator.Collections.CharacterList = Backbone.Collection.extend({

        model: RpgGenerator.Models.CharacterList

    });

})();
