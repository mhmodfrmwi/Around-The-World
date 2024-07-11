import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Country = (props) => {
  const { country } = useParams();

  const [countryData, setCountrydata] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => response.json())
      .then((response) => {
        setCountrydata(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
    console.log(countryData);
    console.log(countryData);
  }, [country]);
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };
  return (
    <div className="px-12 py-14 min-h-screen">
      <Link to={"/"} className="shadow-md">
        <svg
          width="70"
          height="68"
          viewBox="0 0 70 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-black"
        >
          <g filter="url(#filter0_d_2005_992)">
            <rect x="14" y="8" width="42" height="40" rx="6" fill="white" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
            fill="#111827"
          />
          <defs>
            <filter
              id="filter0_d_2005_992"
              x="0"
              y="0"
              width="70"
              height="68"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="7" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2005_992"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2005_992"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Link>
      <div className="dark:text-white h-full">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong..!</p>}
        {!isLoading && !isError && (
          <div className="flex flex-wrap justify-between">
            <div className="w-1/4 my-4 max-[768px]:w-full">
              <img
                src={countryData[0]?.flags?.svg}
                alt=""
                width={"560px"}
                height={"401px"}
                className="w-full"
              />
            </div>
            <div className="w-1/4 max-[768px]:w-full">
              <div className="text-start content-center">
                <h1 className="text-2xl font-extrabold my-4">
                  {countryData[0]?.name?.common}
                </h1>
                <p>
                  <span className="font-bold">Population:</span>{" "}
                  {formatNumber(countryData[0]?.population)}
                </p>
                <p>
                  <span className="font-bold">Capital:</span>{" "}
                  {countryData[0]?.capital}
                </p>
                <p>
                  <span className="font-bold">Region:</span>{" "}
                  {countryData[0]?.region}
                </p>
                <p>
                  <span className="font-bold">Sub region:</span>{" "}
                  {countryData[0]?.subregion}
                </p>
              </div>
            </div>
            <div className="w-1/4 my-4 max-[768px]:w-full">
              <div className="text-start content-center">
                <p>
                  <span className="font-bold">Top Level Domain:</span>{" "}
                  {countryData[0]?.tld}
                </p>
                <p>
                  <span className="font-bold">Currency:</span>{" "}
                  {countryData[0] &&
                    Object.keys(countryData[0].currencies).length > 0 && (
                      <>{Object.values(countryData[0].currencies)[0].name} </>
                    )}
                </p>
                <p>
                  <span className="font-bold">Languages:</span>{" "}
                  {countryData[0]?.languages?.spa}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Country;
