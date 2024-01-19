const { createStore } = require("redux");

// reducer
const cartReducer = (
  state = {
    card: [
      { id: 1, name: "iphone", price: 100 },
      { id: 10, name: "samsung", price: 200 },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    default:
      return state;
  }
};

// store

const store = createStore(cartReducer);
console.log(store.getState());
// subscribe

store.subscribe = () => {
  console.log(store.getState());
};

// dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: { id: 3, name: "nokia", price: 300 },
};
store.dispatch(action1);
