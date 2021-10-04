import { IActivity } from "../../app/models/activity";
import style from "./ActivityItem.module.css";

// interface Props {
//   activity: IActivity;
// }

const ActivityItem = (props: IActivity) => {
  const viewActivityHandler = () => {
    console.log(props.id);
  };
  return (
    <div className={style.card}>
      <div className={style.header}>
        <h3>{props.title}</h3>
      </div>
      <div className={style.cardContent}>
        <span>{props.date}</span>
        <span>
          {props.city}, {props.venue}
        </span>
        <span>{props.description}</span>
      </div>
      <div className={style.footer}>
        <button className={style.category}>{props.category}</button>
        <button className={style.view} onClick={viewActivityHandler}>
          View
        </button>
      </div>
    </div>
  );
};

export default ActivityItem;
