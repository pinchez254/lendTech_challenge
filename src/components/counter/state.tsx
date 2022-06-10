export const initialCounterState = {
  count: [],
};
//reducer to handle the state of the counter

export const counterReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_COUNTER":
      return {
        ...state,
        count: [...state.count, action.payload],
      };

    default:
      return state;
  }
};
