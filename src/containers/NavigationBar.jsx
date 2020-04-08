import React from 'react';
import { Colors } from "@blueprintjs/core";
import SearchInput from '../components/SearchInput';
import AddButton from '../components/AddButton';

const NavigationBar = () => {

  return (
    <div className="bp3-navbar" style={{background: Colors.COBALT5}}>
      <div className="bp3-navbar-group bp3-align-left">
        <SearchInput />
        <AddButton />
      </div>      
    </div>
  )  
}

export default NavigationBar;