// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //this is pointing to table object
    this.render();

  },

  render: function() {
    this.$el.children().detach();
    console.log(this.collection)
    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
      return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
