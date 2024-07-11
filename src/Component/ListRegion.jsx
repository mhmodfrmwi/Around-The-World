import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const ListRegion = (props) => {
  return (
    <div className="w-5/6 mx-auto">
      {props.data.length === 0 ? (
        <div className="text-center items-center py-8">
          <svg
            width="416"
            height="344"
            viewBox="0 0 416 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto w-96 h-80"
          >
            <path
              d="M160.38 195.732C159.562 202.436 153.459 207.204 146.755 206.386C140.048 205.564 135.283 199.464 136.101 192.76C136.92 186.056 143.023 181.288 149.727 182.107C156.431 182.925 161.199 189.028 160.38 195.732Z"
              fill="#E2E2E2"
            />
            <path
              d="M262.777 160.733C262.777 160.733 245.555 152.491 227.187 152.344C208.82 152.197 191.468 160.162 191.468 160.162"
              stroke="black"
              strokeWidth="7"
            />
            <path
              d="M208.691 100.873L208.492 125.722M244.885 101.163L244.686 126.012"
              stroke="black"
              strokeWidth="7"
            />
            <path
              opacity="0.3"
              d="M146.951 123.396C143.032 167.456 175.554 206.345 219.605 210.263C263.652 214.186 302.549 181.664 306.473 137.609C310.396 93.5623 277.864 54.6733 233.813 50.7455C189.762 46.8271 150.869 79.3536 146.946 123.4L146.951 123.396Z"
              fill="#F9FAFB"
              stroke="#8A8A8A"
              strokeWidth="6"
              strokeMiterlimit="10"
            />
            <path
              d="M318.894 138.723C314.358 189.633 269.415 227.218 218.495 222.69C167.581 218.148 129.991 173.209 134.523 122.295C139.065 71.3811 184.013 33.7918 234.918 38.3232C285.837 42.8604 323.417 87.808 318.89 138.718L318.894 138.723ZM308.51 137.801C312.449 92.6118 279.163 52.8137 233.996 48.7073C188.821 44.7651 149.023 78.0515 144.917 123.218C140.974 168.402 174.26 208.2 219.428 212.297C264.607 216.244 304.4 182.962 308.51 137.801Z"
              fill="#E2E2E2"
            />
            <path
              d="M126.531 193.724L126.521 193.685L135.899 185.639L154.714 207.326L137.219 222.43L78.7728 272.885C72.7611 278.075 63.6777 277.397 58.5019 271.373C53.3439 265.371 54.0159 256.322 60.0068 251.15L126.528 193.721L126.531 193.724Z"
              fill="#161D21"
            />
            <path
              d="M31.26 83.2099C31.26 83.2099 32.28 80.1499 37.38 79.1299C42.48 78.1099 48.6 83.7199 48.6 83.7199C48.6 83.7199 52.68 75.5599 56.76 75.0499C60.84 74.5399 65.43 78.1099 65.43 78.1099"
              stroke="#263238"
              strokeMiterlimit="10"
            />
            <path
              d="M18 102.59C18 102.59 19.02 99.5299 24.12 98.5099C29.22 97.4899 35.34 103.1 35.34 103.1C35.34 103.1 39.42 94.9399 43.5 94.4299C47.58 93.9199 52.17 97.4899 52.17 97.4899"
              stroke="#263238"
              strokeMiterlimit="10"
            />
            <path
              d="M66.47 102.72C66.47 102.72 67.25 100.39 71.13 99.6098C75.01 98.8298 79.67 103.11 79.67 103.11C79.67 103.11 82.78 96.8998 85.88 96.5098C88.99 96.1198 92.48 98.8398 92.48 98.8398"
              stroke="#263238"
              strokeMiterlimit="10"
            />
            <path
              d="M97 126.104C97 126.104 97.51 124.574 100.06 124.064C102.61 123.554 105.66 126.354 105.66 126.354C105.66 126.354 107.7 122.274 109.73 122.024C111.77 121.774 114.06 123.554 114.06 123.554"
              stroke="#263238"
              strokeMiterlimit="10"
            />
            <path
              d="M321.422 265.939C317.761 249.309 298.792 236.919 282.268 239.292C278.149 239.881 274.142 241.44 271.044 244.318C266.821 248.242 267.821 252.699 265.737 257.564C265.154 258.912 264.029 260.112 262.591 260.365C258.479 261.074 255.166 256.932 251.005 256.904C247.894 256.883 243.914 258.617 242.177 261.334C240.559 263.861 241.684 268.276 238.781 269.954C235.53 271.835 231.571 268.262 228.05 269.554C223.681 271.161 225.667 274.37 224.077 276.384C222.486 278.392 219.312 277.592 214.936 277.184C210.567 276.784 206.99 282 206.99 282H344.871C344.871 282 346.065 279.992 340.898 271.962C335.73 263.931 328.583 269.554 325.402 269.554C322.22 269.554 321.429 265.946 321.429 265.939H321.422Z"
              stroke="#263238"
              strokeMiterlimit="10"
            />
            <path
              d="M400.659 229.295C398.425 219.241 386.885 211.738 376.821 213.177C374.313 213.537 371.879 214.479 369.992 216.215C367.421 218.585 368.032 221.284 366.757 224.226C366.399 225.041 365.714 225.771 364.839 225.919C362.342 226.353 360.318 223.845 357.789 223.824C355.892 223.813 353.468 224.861 352.414 226.501C351.434 228.036 352.119 230.703 350.349 231.719C348.368 232.851 345.965 230.692 343.815 231.475C341.16 232.449 342.361 234.386 341.391 235.603C340.422 236.82 338.493 236.333 335.827 236.09C333.171 235.846 330.99 239 330.99 239H414.917C414.917 239 415.645 237.783 412.494 232.925C409.353 228.068 405.001 231.465 403.062 231.465C401.123 231.465 400.649 229.285 400.638 229.274L400.659 229.295Z"
              stroke="#263238"
              strokeMiterlimit="10"
            />
            <path
              d="M83.6691 164.295C81.435 154.241 69.8955 146.738 59.8313 148.177C57.3232 148.537 54.8888 149.479 53.0025 151.215C50.4311 153.585 51.0423 156.284 49.7672 159.226C49.4089 160.041 48.7239 160.771 47.8492 160.919C45.3516 161.353 43.3283 158.845 40.7991 158.824C38.9021 158.813 36.4783 159.861 35.4245 161.501C34.4444 163.036 35.1294 165.703 33.359 166.719C31.3777 167.851 28.975 165.692 26.8252 166.475C24.1695 167.449 25.3709 169.386 24.4014 170.603C23.4318 171.82 21.5033 171.333 18.8371 171.09C16.1814 170.846 14 174 14 174L97.9275 174C97.9275 174 98.6546 172.783 95.5037 167.925C92.3632 163.068 88.0109 166.465 86.0718 166.465C84.1328 166.465 83.6585 164.285 83.648 164.274L83.6691 164.295Z"
              stroke="#263238"
              strokeMiterlimit="10"
            />
          </svg>
          <h1 className="text-3xl mb-4">No results found</h1>
          <p>
            We can’t find the country you searched for... Try to search for
            another one
          </p>
        </div>
      ) : (
        <ul className="list-none flex flex-wrap justify-evenly content-center ml-12 gap-y-4">
          {props.data.map((country) => (
            <Link
              to={`/${country.name.common}`}
              key={country.name.official}
              className="w-1/4 max-[1024px]:w-1/3 max-[768px]:w-1/2 max-[426px]:w-full"
            >
              <CountryCard
                name={country.name.common}
                population={country.population}
                area={country.area}
                capital={country.capital}
                region={country.region}
                flag={country.flags.svg}
              />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ListRegion;
