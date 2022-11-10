import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => {
      return (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ListDeleteButton type="button" onClick={() => deleteContact(id)}>
            Delete
          </ListDeleteButton>
        </ListItem>
      );
    })}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
