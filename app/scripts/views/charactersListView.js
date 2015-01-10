/*global RpgGenerator, Backbone, JST*/

RpgGenerator.Views = RpgGenerator.Views || {};

(function () {
    'use strict';

    RpgGenerator.Views.CharactersListView = Backbone.View.extend({

        template: JST['app/scripts/templates/charactersListView.ejs'],

        el: '#table-content',

        events: {},

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template);
        }

    });

})();
