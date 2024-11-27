import React from 'react';
import DropDownButtoon from './Component/DropDownButtoon';
import { dropDownOptions } from './content';

function App() {
  return (
    <div className="flex justify-center pt-24 items-center ">
    <DropDownButtoon
      options={dropDownOptions}
      buttonStyle="text-white bg-blue-500 font-medium rounded shadow-lg"
      menuStyle="bg-white shadow-xl px-2"
    />
  </div>
  
  );
}

export default App;
