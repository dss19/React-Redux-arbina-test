import React, { Component } from 'react';
import { Colors } from "@blueprintjs/core";
import SearchInput from '../search-input/search-input';
import AddButton from '../add-button/add-button';

export default class NavigationBar extends Component {

  state = {
    label: ''   
  }; 
      
  onLabelChange = (e) => { 
    const term = e.target.value;   
    this.setState({
      label: e.target.value     
    });
    this.props.onSearchChange(term);        
  };

  onSubmit = (e) => {
    const term = '';    
    e.preventDefault();    
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
    this.props.onSearchChange(term);        
  };

  render() {
    return (
      <div className="bp3-navbar" style={{background: Colors.COBALT5}}>        
        <form onSubmit={this.onSubmit}
              className="bp3-navbar-group bp3-align-left">
          <SearchInput 
            onChange={this.onLabelChange}
            value={this.state.label} />
          <AddButton />                 
        </form>                        
      </div>
    )
  }    
}