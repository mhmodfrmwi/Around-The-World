import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const RegionMenu = ({ originalCountryList, setFilteredCountryList }) => {
  const regions = [
    { value: "all", label: "All Regions" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  const [selectedRegion, setSelectedRegion] = useState("all");

  const handleValueChange = (value) => {
    setSelectedRegion(value);
    if (value === "all") {
      setFilteredCountryList(originalCountryList);
    } else {
      const filteredCountries = originalCountryList.filter(
        (country) => country.region.toLowerCase() === value
      );
      localStorage.setItem("region", value);
      setFilteredCountryList(filteredCountries);
    }
  };
  return (
    <Select value={selectedRegion} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Region" />
      </SelectTrigger>
      <SelectContent>
        {regions.map((region) => (
          <SelectItem key={region.value} value={region.value}>
            {region.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RegionMenu;
