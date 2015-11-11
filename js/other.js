var ContactFormView = Backbone.View.extend({
  tagname: 'form',
  classname: 'contact-form',
  render: function() {
    console.log('#contact-form');
  }

});

var contactFormView = new ContactFormView() {
  $('main').html(contactFormView.el);
  contactFormView.render();
}
