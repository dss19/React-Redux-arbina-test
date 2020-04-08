import React, { Component }  from 'react';
import { Colors } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { search } from '../redux/actions/index';

class SearchInput extends Component {  
  
  onSeacrChange = (e) => {
    const term = e.target.value;
    this.props.search(term);        
  }

  render() {
    return (
      <input 
        className="bp3-input" 
        type="text" 
        placeholder="Search Input"
        style={{background: Colors.INDIGO4}}
        onChange={this.onSeacrChange} />      
    )
  }  
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { search })(SearchInput);