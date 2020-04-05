import React, { Component } from 'react';
import { Colors } from "@blueprintjs/core";
import SearchInput from '../search-input/search-input';
import AddButton from '../add-button/add-button';

export default class NavigationBar extends Component {

  state = {
    label: ''    
  };
    
  onLabelChange = (e) => {    
    this.setState({
      label: e.target.value      
    });    
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <div className="bp3-navbar" style={{background: Colors.COBALT5}}>
        <div className="bp3-navbar-group bp3-align-left">
          <form onSubmit={this.onSubmit}>
            <SearchInput 
              onChange={this.onLabelChange}
              value={this.state.label} />
            <AddButton />                 
          </form>   
        </div>                
      </div>
    )
  }    
}