import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, FilterHeader } from './FilterContacts.styled';
import {filtersContacts} from '../redux/contactsSlice';
export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(filtersContacts(event.target.value));
  };

  return (
    <FilterWrapper>
      <FilterHeader>Find by name</FilterHeader>{' '}
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterWrapper>
  );
};

export default FilterContacts;
