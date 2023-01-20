import { ButtonCss } from 'components/App/App.styled';
import PropTypes from 'prop-types';
import { ContactTextCss } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => <>
    <ContactTextCss>{name}: {number}</ContactTextCss>
    <ButtonCss type='button' onClick={() => onDelete(id)}>Delete</ButtonCss>
</>;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactItem;