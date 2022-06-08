import { InputFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter';
import { filterContacts } from 'redux/filter';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatchFilter = useDispatch();
  const onChangeFiter = ({ target }) => {
    const inputValue = target.value;
    dispatchFilter(filterContacts(inputValue));
  };
  return (
    <>
      <InputFilter
        type="text"
        value={filterValue}
        onChange={onChangeFiter}
        placeholder="Enter name"
      />
      ;
    </>
  );
};
