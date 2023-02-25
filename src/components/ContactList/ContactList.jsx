import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
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
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
