import { Box } from 'components/Box';
import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterContact }) => {
  return (
    <Box
      as="label"
      display="flex"
      gridGap="10px"
      alignItems="center"
      htmlFor="filter"
    >
      Find contacts by name
      <Input type="input" name="filter" onChange={onFilterContact}></Input>
    </Box>
  );
};

Filter.propTypes = {
  onFilterContact: PropTypes.func.isRequired,
};
