import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, FilterHeader } from './FilterContacts.styled';
import { filtersContacts } from '../../redux/contacts/contactsSlice';
import { selectFilters } from '../../redux/contacts/selectors';
export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleFilterChange = event => {
    dispatch(filtersContacts(event.target.value));
  };

  return (
    <FilterWrapper>
      <FilterHeader>
        <input
          type="text"
          name="filter"
          placeholder="Search your contacts....."
          value={filter}
          onChange={handleFilterChange}
        />
      </FilterHeader>
    </FilterWrapper>
  );
};

export default FilterContacts;
