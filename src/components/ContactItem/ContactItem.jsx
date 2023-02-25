import PropTypes from 'prop-types';

export const ContactItem = ({ name, number }) => (
  <li>
    {name}: {number}
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
