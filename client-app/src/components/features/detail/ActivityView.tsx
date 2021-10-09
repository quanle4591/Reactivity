import { IActivity } from "../../app/models/activity";
import style from "./ActivityView.module.css";

const ActivityView = (prop: IActivity) => {
  return (
    <div className={style.container}>
      <li>id = {prop.id}</li>
      <li>title = {prop.title}</li>
      <li>date = {prop.date}</li>
      <li>category = {prop.category}</li>
      <li>description = {prop.description}</li>
      <li>city = {prop.city}</li>
      <li>venue = {prop.venue}</li>
    </div>
  );
};

export default ActivityView;
