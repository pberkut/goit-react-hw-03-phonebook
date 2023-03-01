import PropTypes from 'prop-types';
import { FormField } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FormField>
    Find contacts by name or phone:
    <input
      type="text"
      value={value}
      title="Type name or phone"
      onChange={onChange}
    />
  </FormField>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
