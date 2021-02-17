// based on the action that is dispatched, the reducer will change the store's globalized state
const searchReducer = (state = [], action) => {
  switch (action.type) {
    // if the SEARCH action is dispatched, then spread the new query to the globalized state (in store)
    case 'ADD_SEARCH':
      return [...state, { id: action.id, query: action.query }];
    // else, return the globalized state (in store) as it currently is
    default:
      return state;
  }
};

export default searchReducer;
