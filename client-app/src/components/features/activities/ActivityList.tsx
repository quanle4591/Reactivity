import { Fragment } from "react";
import { IActivity } from "../../app/models/activity";
import ActivityItem from "./ActivityItem";
import style from "./ActivityList.module.css";

interface Prop {
  activities: IActivity[];
  onClickViewHandler: (id: string) => void;
}

const ActivityList = (props: Prop) => {
  const onClickView = (id: string) => {
    props.onClickViewHandler(id);
  };

  if (props.activities.length > 0) {
  }
  const ActivityList =
    props.activities.length > 0
      ? props.activities.map((act) => {
          return (
            <Fragment key={act.id}>
              <ActivityItem activity={act} onClickViewHandler={onClickView} />
              <hr style={{ marginTop: "15px" }} />
            </Fragment>
          );
        })
      : "";
  return <div className={style.cards}>{ActivityList}</div>;
};

export default ActivityList;
