import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';

const ContactList = ({contacts, onDelete}) => <ContactUlCss>
        {contacts.map(({ id, name, number }) => <ContactItemCss key={id}>
            <ContactItem id={id} name={name} number={number} onDelete={onDelete} />
        </ContactItemCss>)}
    </ContactUlCss>


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDelete: PropTypes.func.isRequired
}
export default ContactList;