import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Button, ListItem } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <ListItem>
    <span>{name}:</span> <span>{number}</span>{' '}
    <Button type="button" onClick={() => onDeleteContact(id)}>
      <MdClose />
    </Button>
  </ListItem>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
