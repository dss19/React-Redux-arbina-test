import React from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';


import NavigationBar from './containers/NavigationBar';
import Table from './components/Table';

export default function App() {
  return (
    <div className="app">
      <NavigationBar />      
      <Table />
    </div>
  )
}