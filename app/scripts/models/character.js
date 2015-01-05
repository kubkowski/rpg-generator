/*global RpgGenerator, Backbone*/

RpgGenerator.Models = RpgGenerator.Models || {};

(function () {
    'use strict';

    RpgGenerator.Models.Character = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
