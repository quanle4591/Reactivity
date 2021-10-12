interface Action {
  type: string;
  payload: string;
}

const activityIdReducer = (state: string = "", action: Action): string => {
  switch (action.type) {
    case "ID":
      return action.payload;
    default:
      return state;
  }
};

export default activityIdReducer;
