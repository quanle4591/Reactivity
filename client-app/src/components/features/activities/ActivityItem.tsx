import { IActivity } from "../../app/models/activity";
import style from "./ActivityItem.module.css";
import { actId, detail } from "../../store/actions/activityActions";
import store from "../../store/store";

interface Props {
  activity: IActivity;
  onClickViewHandler: (id: string) => void;
  onClickDeleteHandler: (id: string) => void;
}

const ActivityItem = (props: Props) => {
  const viewActivityHandler = (id: string) => {
    props.onClickViewHandler(id);
    // store.dispatch(actId(id));
  };
  const deleteActivityHandler = (id: string) => {
    props.onClickDeleteHandler(id);
  };

  return (
    <div className={style.card}>
      <div className={style.header}>
        <h3>{props.activity.title}</h3>
      </div>
      <div className={style.cardContent}>
        <span>{props.activity.date}</span>
        <span>
          {props.activity.city}, {props.activity.venue}
        </span>
        <span>{props.activity.description}</span>
      </div>
      <div className={style.footer}>
        <button className={style.category}>{props.activity.category}</button>
        <div>
          <button
            style={{ marginRight: "10px" }}
            className={style.view}
            onClick={() => {
              viewActivityHandler(props.activity.id);
            }}
          >
            View
          </button>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            className={style.view}
            onClick={() => {
              deleteActivityHandler(props.activity.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
