import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
