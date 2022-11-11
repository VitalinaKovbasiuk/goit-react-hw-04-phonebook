import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    <Input
      type="text"
      name={value}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
