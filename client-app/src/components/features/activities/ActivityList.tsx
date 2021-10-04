import { Fragment } from "react";
import { IActivity } from "../../app/models/activity";
import ActivityItem from "./ActivityItem";
import style from "./ActivityList.module.css";

interface Prop {
  activities: IActivity[];
}

const ActivityList = (props: Prop) => {
  if (props.activities.length > 0) {
  }
  const ActivityList =
    props.activities.length > 0
      ? props.activities.map((act) => {
          return (
            <Fragment key={act.id}>
              <ActivityItem
                id={act.id}
                title={act.title}
                date={act.date}
                category={act.category}
                description={act.description}
                city={act.city}
                venue={act.venue}
              />
              <hr style={{ marginTop: "15px" }} />
            </Fragment>
          );
        })
      : "";
  return <div className={style.cards}>{ActivityList}</div>;
};

export default ActivityList;
