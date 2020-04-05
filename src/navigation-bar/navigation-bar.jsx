import React, { Component } from 'react';
import { Colors } from "@blueprintjs/core";
import SearchInput from '../search-input/search-input';
import AddButton from '../add-button/add-button';

export default class NavigationBar extends Component {

  state = {
    label: ''   
  };

  
  

  onSearchChange = (e) => {
    const term = e.target.value;    
    this.props.onSearchChange(term);
    
  }
    
  onLabelChange = (e) => {    
    this.setState({
      label: e.target.value      
    });    
  };

  
  check = (e) => {
    this.onLabelChange(e);
    this.onSearchChange(e);        
  }

  onSubmit = (e) => {
    e.preventDefault();    
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
    console.log(this.state.label);    
  };

  render() {
    return (
      <div className="bp3-navbar" style={{background: Colors.COBALT5}}>
        <div className="bp3-navbar-group bp3-align-left">
          <form onSubmit={this.onSubmit}>
            <SearchInput 
              onChange={this.check}
              value={this.state.label} />
            <AddButton />                 
          </form>   
        </div>                
      </div>
    )
  }    
}