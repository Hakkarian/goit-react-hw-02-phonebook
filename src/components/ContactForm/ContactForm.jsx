import { Component } from "react";
import PropTypes from 'prop-types';
import { ContactFormCss, ContactLabelCss } from "./ContactForm.styled";
import { ButtonCss } from "components/App/App.styled";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    handleInputChange = e => this.setState(({ [e.currentTarget.name]: e.currentTarget.value }));
    handleSubmit = e => {
      const { name, number } = this.state;
      e.preventDefault();
      
      for (let contact of this.props.contacts) {
      if (contact.name.toLowerCase() === this.state.name.toLowerCase()) {
        this.reset();
        alert(`${contact.name} is already in contacts`);
        return;
        }
        if (contact.number.toLowerCase() === this.state.number.toLowerCase()) {
          this.reset();
          alert(`${contact.number} is already in contacts`);
          return;
        }
    }

      return this.props.onSubmit(name, number);
  }
  reset() {
    return this.setState({name: '', number: ''})
  }
    render() {
        return (
          <ContactFormCss onSubmit={this.handleSubmit}>
            <ContactLabelCss>
              {" "}
              Name:{" "}
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleInputChange}
                value={this.state.name}
                required
              />
            </ContactLabelCss>
            <ContactLabelCss>
              {" "}
              Phone:{" "}
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handleInputChange}
                value={this.state.number}
                required
              />
            </ContactLabelCss>
            <ButtonCss type="submit">Add to contact</ButtonCss>
          </ContactFormCss>
        );
    }
}



export default ContactForm;