import { useState } from "react";
import { IActivity } from "../../models/activity";
import ActivityList from "../../../features/activities/ActivityList";
import ActivityView from "../../../features/detail/ActivityView";
import style from "./Body.module.css";
import { act } from "@testing-library/react";

interface Prop {
  activities: IActivity[];
}

const Body = (props: Prop) => {
  const [activity, setActivity] = useState<IActivity>();

  const onClickViewActivity = (id: string) => {
    const viewActivity = props.activities.find((act) => act.id === id);
    setActivity(viewActivity);
  };
  const displayActivity = activity ? (
    <ActivityView
      id={activity.id}
      title={activity.title}
      category={activity.category}
      date={activity.date}
      description={activity.description}
      city={activity.city}
      venue={activity.venue}
    />
  ) : null;
  return (
    <div className={style.Body}>
      <ActivityList
        activities={props.activities}
        onClickViewHandler={onClickViewActivity}
      />
      <div className={style.detail}>{displayActivity}</div>
    </div>
  );
};

export default Body;
