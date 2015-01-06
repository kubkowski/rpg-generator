/*global RpgGenerator, Backbone, JST*/

RpgGenerator.Views = RpgGenerator.Views || {};

(function () {
    'use strict';

    RpgGenerator.Views.Header = Backbone.View.extend({

        template: JST['app/scripts/templates/header.ejs'],

        el: '#content',

        render: function () {
            this.$el.html(this.template);
        }

    });

})();
