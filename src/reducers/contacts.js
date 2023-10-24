let contactsReducer = {
  // case Reducer: contacts/add
  /* Acts as Action Creators */
  add: (state, action) => {
    state.push(action.payload);
  },

  // case Reducer: contacts/remove
  remove: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload);
    state.splice(index, 1);
  },
};

export default contactsReducer;
