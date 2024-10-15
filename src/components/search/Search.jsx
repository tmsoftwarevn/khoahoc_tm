import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const route = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleClickSearch = () => {
   route.push(`/tim-kiem?text=${inputValue}`);
  };

  const handleKeyPress = (event) => {
   
    if (event.key === "Enter") {
      handleClickSearch();
    }
  };

  return (
    <>
      <div className="md:max-w-[250px] lg:max-w-[370px] inline-flex items-center rounded-[35px] p-[5px] pl-5 w-full bg-violet-100 h-8">
        <input
          className="w-full outline-none bg-transparent placeholder:text-gray-400 "
          placeholder="Tìm kiếm"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <div
          onClick={handleClickSearch}
          className="p-1 cursor-pointer rounded-full text-2xl"
        >
          <GoSearch className="text-orange-500" />
        </div>
      </div>
    </>
  );
};

export default Search;
