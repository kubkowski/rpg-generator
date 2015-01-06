/*global RpgGenerator, Backbone*/

RpgGenerator.Routers = RpgGenerator.Routers || {};

(function () {
    'use strict';

    RpgGenerator.Routers.Router = Backbone.Router.extend({
        routes: {
            '' : 'charactersList',
            'dice' : 'k6'
        },

        charactersList : function () {
            var header = new RpgGenerator.Views.Header();
            header.render();
        },

        k6: function () {
            $('.content').html(dice(6));
        }
    });

    var router = new RpgGenerator.Routers.Router();
})();
