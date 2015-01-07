/*global RpgGenerator, Backbone, JST*/

RpgGenerator.Views = RpgGenerator.Views || {};

(function () {
    'use strict';

    RpgGenerator.Views.CharacterListView = Backbone.View.extend({

        template: JST['app/scripts/templates/characterListView.ejs'],

        tagName: '',

        id: '',

        className: '.table-content',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
