// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({ 

    tagName: 'tr',

    template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

    events: {
      'click':function(){
        console.log('click')
        this.model.enqueue()
      }
    },

   render: function(){
      console.log('render' + this )
    return this.$el.html(this.template(this.model.attributes));


   }
});
