import { IActivity } from "../../app/models/activity";

interface Action {
  type: string;
  payload: IActivity[];
}

const activityListReducer = (state: IActivity[] = [], action: Action): any => {
  switch (action.type) {
    case "LIST":
      return action.payload;
    default:
      return state;
  }
};

export default activityListReducer;
