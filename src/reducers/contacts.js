let constantReducer = {
  // case Reducer: contacts/add
  add: (state, action) => {
    state.push(action.payload);
  },

  // case Reducer: contacts/remove
  remove: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload);
    state.splice(index, 1);
  },
};

export default constantReducer;
