// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({ 

    events: {
      'click':function(){
        this.model.enqueue()
      }
    },

   render: function(){
    return this.$el.html(this.template(this.model.attributes));


   }
});
