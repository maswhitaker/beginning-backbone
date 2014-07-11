var PersonView = Backbone.View.extend({
  className: "rolodex",
  render: function(){
      var img = $('<img>');
      img.attr('src',this.model.get('imgUrl'));
      this.$el.append(img);
      return this;
  },
  events: {
    'click': 'onClick'
  },
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.render)
  },
  template: function(model){

  }
});
var person = new Person({firstName: "Grace",
  lastName: "Hopper",
  role: "Computer Scientist",
  imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
})

var personView = new PersonView({
  model: person
});

$(document).ready(function(){
  $('body').append(personView.render().$el);
});


var RolodexView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.render)
  },
  render: function(){
    var source = $('#rolodex-template').html();
    var template = Handlebars.compile(source);
    var rendered = template({people: this.collection.to})
    this.$el.append(rendered);
    return this;
  }
})
var rolodexView = new RolodexView({
  collection: people
})

$(function(){
  $('.people-list').append(rolodexView.render().$el);
})
