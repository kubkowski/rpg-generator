/*global RpgGenerator, Backbone*/

RpgGenerator.Routers = RpgGenerator.Routers || {};

(function () {
    'use strict';

    RpgGenerator.Routers.Router = Backbone.Router.extend({
        routes: {
            '' : 'charactersList',
            'dice' : 'k6',
            'characters/new' : 'newCharacter'
        },

        charactersList : function () {
            var header = new RpgGenerator.Views.Header();
            header.render();
            var charactersListView = new RpgGenerator.Views.CharactersListView();
            charactersListView.render();
        },

        k6: function () {
            $('.content').html(dices(3, 6, 0));
        },

        newCharacter: function () {
            
        }
    });

    var router = new RpgGenerator.Routers.Router();
})();
