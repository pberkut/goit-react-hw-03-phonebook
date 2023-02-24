import PropTypes from 'prop-types';

export const Contacts = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
