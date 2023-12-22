import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, FilterHeader } from './FilterContacts.styled';
import { filtersContacts } from '../../redux/contactsSlice';
import { getFilters } from '../../redux/selectors';
export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);

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
