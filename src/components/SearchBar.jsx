const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{ width: "100%", padding: "0.8rem", marginBottom: "1rem" }}
    />
  );
};

export default SearchBar;
