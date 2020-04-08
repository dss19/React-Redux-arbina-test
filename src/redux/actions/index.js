
let nextItemID = 2;

const addItem = (label) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      label,
      id: ++nextItemID
    }
  }
}

const search = (label) => {    
  return {
    type: 'SEARCH',
    payload: label     
  }    
}

export { addItem, search };

// search(items, term) {
  // if (term.length === 0) {
  //   return items;
  // }
  // return items.filter((item) => {
  //   return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;      
  // });    
// };