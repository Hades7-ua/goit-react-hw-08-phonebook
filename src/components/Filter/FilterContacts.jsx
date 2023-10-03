export const FilterContacts = ({ value, onChange }) => {
  return (
    <label>
      Find by name{' '}
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

export default FilterContacts;
