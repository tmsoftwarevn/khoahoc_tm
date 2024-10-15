import { useRouter } from "next/navigation";
import { useState } from "react";


function SearchBar(props) {
  const {setKeySearch} = props;

  const [inputValue, setInputValue] = useState("");

  const navigate = useRouter();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setKeySearch(inputValue)
      navigate.push(`/blog/tim-kiem?s=${inputValue}`);
    }
  };
  
  return (
    <div className="cursor-pointer w-full">
      <div className="relative flex items-center h-12 rounded focus-within:shadow-lg bg-white overflow-hidden">
        <div
          className="grid place-items-center h-full w-12 text-blue-600 bg-gray-200"
          onClick={() => {
            navigate.push(`/blog/tim-kiem?s=${inputValue}`);
            setKeySearch(inputValue)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm bg-gray-200 pr-2"
          type="text"
          id="search"
          placeholder="Tìm kiếm"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default SearchBar;
