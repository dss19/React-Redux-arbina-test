import React  from 'react';
import { Colors } from '@blueprintjs/core';

const SearchInput = ({ onChange, value }) => {
   
  return <input 
          className="bp3-input" 
          type="text" 
          placeholder="Search Input"
          style={{background: Colors.INDIGO4}}
          onChange={onChange}
          value={value} />
      
}

export default SearchInput;