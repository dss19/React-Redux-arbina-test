import React from "react";
import { connect } from 'react-redux';
import { Colors } from "@blueprintjs/core";

const Table = ({ tableItems, term}) => {

  const visItems = tableItems.filter(item => {
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
  })
      
  const elements = visItems.map((item) => {
    const { id, label } = item;    
    return <div key={id} style={{height: "30px", textAlign: "center", fontSize: "16px", fontWeight: "bold"}}>
            { label }
          </div>    
  });  
  
  return (
    <div style={{height: "calc(100vh - 50px)", background: Colors.INDIGO3, display: "flex", flexDirection: "column", justifyContent: "center"}}>
      {elements}
    </div>
  )
}

const mapStateToProps = (state) => {  
  return state 
}

export default connect(mapStateToProps)(Table);
