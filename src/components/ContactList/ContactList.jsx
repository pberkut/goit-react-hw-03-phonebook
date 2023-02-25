import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
        ))}
      </ul>
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
};
