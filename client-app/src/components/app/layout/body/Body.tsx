import { IActivity } from "../../models/activity";
import ActivityList from "../../../features/activities/ActivityList";
import Style from "./Body.module.css";

interface Prop {
  activities: IActivity[];
}

const Body = (props: Prop) => {
  return (
    <div className={Style.Body}>
      <ActivityList activities={props.activities} />
    </div>
  );
};

export default Body;
