import { IActivity } from "../../app/models/activity";
import style from "./ActivityItem.module.css";

interface Props {
  activity: IActivity;
  onClickViewHandler: (id: string) => void;
}

const ActivityItem = (props: Props) => {
  const viewActivityHandler = (id: string) => {
    props.onClickViewHandler(id);
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
        <button
          className={style.view}
          onClick={() => {
            viewActivityHandler(props.activity.id);
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ActivityItem;
