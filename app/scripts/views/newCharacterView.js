/*global RpgGenerator, Backbone, JST*/

RpgGenerator.Views = RpgGenerator.Views || {};

(function () {
    'use strict';

    RpgGenerator.Views.NewCharacterView = Backbone.View.extend({

        template: JST['app/scripts/templates/newCharacterView.ejs'],

        el: '#content',

        events: {},

        render: function () {
            this.$el.html(this.template);
        }

    });

})();
