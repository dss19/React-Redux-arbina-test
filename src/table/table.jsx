import React from 'react'

const Table = ({ tableItems }) => {

  const elements = tableItems.map((item) => {
    const { id, label } = item;
    

    return <div key={id} style={{height: "30px"}}>
            {label}
          </div>
    // return <tr key={id} {...itemProps}/>
    
  })

  return (
    // <table className="bp3-html-table">
    //   <thead>Table</thead>
    //   <tbody>
    //     {elements}
    //   </tbody>
    // </table>

    <div style={{height: "100vh"}}>
      {elements}
    </div>
  )
}

export default Table;