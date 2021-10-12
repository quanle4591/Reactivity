import { combineReducers } from "redux";
import activityDetailReducer from "./activityDetailReducer";
import activityListReducer from "./activityListingReducer";
import activityIdReducer from "./activityIdReducer";

const reducers = combineReducers({
  allActivities: activityListReducer,
  activity: activityDetailReducer,
  activityId: activityIdReducer,
});

export default reducers;
