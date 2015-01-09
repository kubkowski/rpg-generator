/*global RpgGenerator, Backbone, JST*/

RpgGenerator.Views = RpgGenerator.Views || {};

(function () {
    'use strict';

    RpgGenerator.Views.CharactersListView = Backbone.View.extend({

        template: JST['app/scripts/templates/charactersListView.ejs'],

        el: '#content',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template);
        }

    });

})();
