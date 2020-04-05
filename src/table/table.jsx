import React from 'react'

const Table = ({ tableItems }) => {

  const elements = tableItems.map((item) => {
    const { id, label } = item;    

    return <div key={id} style={{height: "30px"}}>
            {label}
          </div>    
  });

  return (
    <div style={{height: "100vh"}}>
      {elements}
    </div>
  )
}

export default Table;