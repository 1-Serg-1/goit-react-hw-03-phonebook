import { TableTh, TableTd, BtnDel } from './ConstactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ state, onDeleteContact }) => {
  console.log(state);
  return (
    <table>
      <TableTh>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </TableTh>
      <tbody>
        {state.map(({ name, number, id }) => {
          return (
            <tr key={id}>
              <TableTd>{name}</TableTd>
              <TableTd>{number}</TableTd>
              <TableTd>
                <BtnDel type="button" onClick={() => onDeleteContact(id)}>
                  Delete
                </BtnDel>
              </TableTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
