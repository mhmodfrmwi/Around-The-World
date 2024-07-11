import { Input } from "@/components/ui/input";

const SearchInput = ({ originalCountryList, setFilteredCountryList }) => {
  const handleValueChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value.toLowerCase();
    const filteredCountries = originalCountryList.filter((country) =>
      country.name.common.toLowerCase().includes(value)
    );
    setFilteredCountryList(filteredCountries);
  };
  return (
    <Input
      type="input"
      placeholder="Search for a country…"
      onChange={handleValueChange}
    />
  );
};
export default SearchInput;
