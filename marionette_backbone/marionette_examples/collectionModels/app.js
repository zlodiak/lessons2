var Player = Backbone.Model.extend({});
var daz = new Player( {name:"daz", age:33});
var gaz = new Player( {name:"gaz", age:38});
var baz = new Player( {name:"baz", age:34});


var Players = Backbone.Collection.extend({
  model: Player,
  initialize: function() {
    this.on("change:name", this.changeName);
    this.on("change:age", this.changeAge);
  },

  changeName: function( model, val, options) {
    console.log(model.get("name") +  model.get("age"));
  },

  changeAge: function( model, val, options) {
    console.log( model.get("name") + model.get("age"));
  }
});
var players = new Players([daz, gaz, baz]);

daz.set( {name:"XXX"});
baz.set( {age:999});