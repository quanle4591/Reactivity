import { IActivity } from "../../app/models/activity";
import style from "./ActivityView.module.css";
import { actId } from "../../store/actions/activityActions";
import store from "../../store/store";

interface Prop {
  activity: IActivity;
  onCancelClick: () => void;
  onEditClick: (id: string) => void;
}

const ActivityView = ({ activity, onCancelClick, onEditClick }: Prop) => {
  return (
    <div className={style.container}>
      <li>id = {activity.id}</li>
      <li>title = {activity.title}</li>
      <li>date = {activity.date}</li>
      <li>category = {activity.category}</li>
      <li>description = {activity.description}</li>
      <li>city = {activity.city}</li>
      <li>venue = {activity.venue}</li>
      <div>
        <button
          onClick={() => {
            onEditClick(activity.id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            onCancelClick();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActivityView;
