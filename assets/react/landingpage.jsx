var React = require('react'),
  ReactDOM = require('react-dom');

var $ = require('jquery');

/*************************************************************
*************************************************************/


const ContactFormComponent = require('./components/Contact.Form.Component.jsx');
var ContactForm = React.createClass({
  getInitialState: function () {
    return {
      email: "",
      name: "",
      message: ""
    };
  },
  saveContactInfo: function (data) {
    $.ajax({
      url: "/saveContactInfo",
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function (result) {
        alert("The web master is going to check your application");
      },
      error: function (xhr, status, err) {
        alert("an Error has Occured");
      }
    });
  },
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  },
  handleSubmit(event) {
    event.preventDefault();
    this.saveContactInfo(this.state);
  },
  render: function () {
    return (
      <div className="jumbotron">
        <ContactFormComponent email={this.state.email} name={this.state.name} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }

});




ReactDOM.render(
  <ContactForm />,
  document.getElementById('containerHome')
);



