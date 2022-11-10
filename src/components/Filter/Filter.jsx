import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ filter, changeFilterInput }) => (
  <label>
    <Input
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
