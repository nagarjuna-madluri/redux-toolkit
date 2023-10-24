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

  update: (state, action) => {
    /* Update functionality using Redux Toolkit */
    /* Immer will make a wrapper and update the state[index] */
    let index = state.findIndex((contact) => contact.id === action.payload.id);
    state[index].firstName = action.payload.firstName;
    state[index].lastName = action.payload.lastName;
    state[index].email = action.payload.email;
    state[index].phone = action.payload.phone;

    // Basic update logic for using plan Redux
    /* return state.map((contact) => {
      if (contact.id === action.payload.id) {
        return {
          ...contact,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          phone: action.payload.phone,
        };
      } else {
        return contact;
      }
    }); */
  },
};

export default constantReducer;
