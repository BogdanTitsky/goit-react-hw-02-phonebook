export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </>
  );
};
