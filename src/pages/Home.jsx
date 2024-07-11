import ListRegion from "@/Component/ListRegion";
import RegionMenu from "@/Component/RegionMenu";
import SearchInput from "@/Component/SearchInput";
import { useEffect, useState } from "react";

const Home = () => {
  const [originalCountries, setOriginalCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => {
        setOriginalCountries(response);
        setFilteredCountries(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="flex flex-1 py-10 px-20 max-[426px]:p-4 gap-4 max-[426px]:flex-col justify-between">
        <SearchInput
          originalCountryList={originalCountries}
          setFilteredCountryList={setFilteredCountries}
        />
        <RegionMenu
          originalCountryList={originalCountries}
          setFilteredCountryList={setFilteredCountries}
        />
      </div>
      <div className="dark:text-white h-full">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong..!</p>}
        {!isLoading && !isError && <ListRegion data={filteredCountries} />}
      </div>
    </>
  );
};
export default Home;
