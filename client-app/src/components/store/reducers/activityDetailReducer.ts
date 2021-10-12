import { IActivity } from "../../app/models/activity";

interface Action {
  type: string;
  payload: string;
}

const activityDetailReducer = (
  state: IActivity[] = [],
  action: Action
): any => {
  switch (action.type) {
    case "DETAIL":
      console.log(`action payload: ${action.payload}`);
      return state.find((act) => act.id === action.payload)
        ? state.find((act) => act.id === action.payload)
        : null;
    default:
      return state;
  }
};

export default activityDetailReducer;
