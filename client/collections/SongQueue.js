// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },
  enqueue: function(song){
    console.log(this + "      enqueued" )
// Triggering event will trigger the queue functinality
    this.add(song);
  },

  model: SongModel

});