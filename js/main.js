
var ContactFormView = Backbone.View.extend({
  tagName: "form",
  className: "contact-form",
  // template: _.template($('#form-template').html());
  render: function() {
    console.log($('#form-template').html());
    // console.log(form-template);
  },
});

var contactFormView = new ContactFormView();
console.log(contactFormView);
  $('main').html(contactFormView.el);
  contactFormView.render();
