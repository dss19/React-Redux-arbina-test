import React, { Component } from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import NavigationBar from '../navigation-bar/navigation-bar';
import Table from '../table/table';


export default class App extends Component {

  maxId = 100;

  state = {
    tableData: [
      this.createTableItem('Drink Coffee'),
      this.createTableItem('Make Awesome App'),
      this.createTableItem('Have a lunch')
    ],
    term: ''  
  };

  createTableItem(label) {
    return {
      label,      
      id: this.maxId++
    }
  }

  addItem = (text) => {
    const newItem = this.createTableItem(text);

    this.setState(({ tableData }) => {
      const newArr = [
        ...tableData,
        newItem
      ];

      return {
        tableData: newArr
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;      
    });    
  };

  render () {

    const { tableData, term } = this.state;
    const visibleItems = this.search(tableData, term);

    return (
      <div className="App">
        <NavigationBar 
          onSearchChange={this.onSearchChange}
          onItemAdded={this.addItem}/>
        <Table tableItems={visibleItems}/>      
      </div>
    );
  }  
}


