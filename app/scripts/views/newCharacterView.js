/*global RpgGenerator, Backbone, JST*/

RpgGenerator.Views = RpgGenerator.Views || {};

(function () {
    'use strict';

    RpgGenerator.Views.NewCharacterView = Backbone.View.extend({

        template: JST['app/scripts/templates/newCharacterView.ejs'],

        el: '#content',

        events: {
            'click #roll' : 'roll'
        },

        render: function () {
            this.$el.html(this.template);
        },

        roll: function (e) {
            e.preventDefault();
            $('#strength').val(dices(3, 6, 0));
            $('#dexterity').val(dices(3, 6, 0));
            $('#constitution').val(dices(3, 6, 0));
            $('#intelligence').val(dices(3, 6, 0));
            $('#wisdom').val(dices(3, 6, 0));
            $('#charisma').val(dices(3, 6, 0));
        }
    });

})();
