import React from 'react';
import { Colors, Button } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/index';
import { Component } from 'react';

class AddButton extends Component {
  
  handleAddItem = () => {
    let abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
        randomStroke = '';
    for (let i = 0; i < abc.length; i++) {
      randomStroke += abc[Math.round(Math.random() * (abc.length - 1))];
    }     
    this.props.addItem(randomStroke);        
  };

  render() {
    return (    
      <Button 
        className="bt3-button"
        icon="plus"            
        style={{background: Colors.COBALT4, marginLeft: "20px"}}
        onClick={this.handleAddItem} />
    )
  }      
}
export default connect(null, { addItem })(AddButton);