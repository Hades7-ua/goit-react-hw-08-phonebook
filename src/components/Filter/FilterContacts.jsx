import { FilterWrapper, FilterHeader } from './FilterContacts.styled';
export const FilterContacts = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <FilterHeader>Find by name</FilterHeader>{' '}
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterWrapper>
  );
};

export default FilterContacts;
