import React, { useState, useEffect } from "react";
import { dropDownTriangle, RightTick } from "../assets/icons";

const DropDownButton = ({ options, buttonStyle, menuStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [selectedOption, setSelectedOption] = useState(null); // Selected option text

  // Set the first option as default
  useEffect(() => {
    if (options?.length > 0) {
      const firstOption = options[0];
      setSelectedOption(firstOption.label || firstOption.items?.[0]?.name || "");
    }
  }, [options]);


  const renderOptions = () =>
    options?.map((option, index) => (
      <div key={index}>
        {/* Section title */}
        {option.category && (
          <span className="text-gray-700 block px-4 py-2 text-sm font-semibold">
            {option.category}
          </span>
        )}

        {/* items links */}
        {option.items?.map((items, vIndex) => (
          <a
            href={"#"}
            key={vIndex}
            className={`px-5 py-2 text-sm flex items-center justify-between rounded-md ${
              selectedOption === items.name
                ? "bg-[#6e2cf3] text-white"
                : "hover:bg-[#b494fc] hover:text-white text-gray-700"
            }`}
            role="menuitem"
            onClick={() => {
              setSelectedOption(items.name);
              setIsOpen(false); // Close the dropdown
            }}
          >
            <span>{items.name}</span>
            {selectedOption === items.name && (
              <img src={RightTick} alt="Selected" className="w-5 h-5" />
            )}
          </a>
        ))}
        {/* Divider */}
        {index < options.length - 1 && <div className="h-px bg-gray-300 my-2"></div>}
      </div>
    ));

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
  type="button"
  className={`inline-flex items-center justify-center h-[40px] rounded-lg px-5 py-2 text-base font-medium gap-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95 
  ${buttonStyle}`}
  aria-expanded={isOpen}
  onClick={toggleDropdown}
>
  {selectedOption}
  <img
    src={dropDownTriangle}
    alt="Dropdown toggle icon"
    className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-180"
  />
</button>


      {/* Dropdown Menu */}
      {isOpen && (
        <div
           className={`absolute right-0 mt-2 w-40 rounded-lg shadow-xl bg-white transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${menuStyle}`}
          role="menu"
        >
          <div className="py-1 space-y-1">{renderOptions()}</div>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;

