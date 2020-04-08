const initialState = {
  tableItems: [
    {
      label: "Drink coffee",
      id: 0
    },
    {
      label: "Make some App",
      id: 1
    },
    {
      label: "Have fun",
      id: 2
    }
  ],
  
  term: ''
  
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ITEM": {     
      return {
        tableItems: [...state.tableItems, action.payload],
        term: state.term        
      }      
    }
    case "SEARCH": {
      return {
        tableItems: state.tableItems,
        term: action.payload
      }      
    }
    default:
      return state;
  }  
};

export default reducer;