import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';

const ContactList = ({ items, removeContact }) => {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ListDeleteButton type="button" onClick={() => removeContact(id)}>
          Delete
        </ListDeleteButton>
      </ListItem>
    );
  });
  return <List>{elements}</List>;
};

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
