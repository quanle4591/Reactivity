import axios from "axios";
import { v4 as uuid } from "uuid";
import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
import style from "./Body.module.css";
import { IActivity } from "../../models/activity";
import agent from "../../api/agent";
// import store from "../../../store/store";
// import { detail, list } from "../../../store/actions/activityActions";
import ActivityList from "../../../features/activities/ActivityList";
import ActivityView from "../../../features/detail/ActivityView";
import ActivityForm from "../../../features/form/ActivityForm";

const Body = forwardRef((props, ref) => {
  const [activity, setActivity] = useState<IActivity>();
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [isDisplayView, setIsDisplayView] = useState(false);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [isCreateAcitivty, setIsCreateActivity] = useState(false);

  useImperativeHandle(ref, () => ({
    createNewActivity() {
      setIsDisplayForm(true);
      setIsCreateActivity(true);
      setActivity(undefined);
    },
  }));

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((err) => console.log(err));
    agent.Activities.list().then((response) => {
      console.log(response);
    });
  }, []);

  const onClickViewActivity = (id: string): void => {
    agent.Activities.activity(id).then((response) => {
      setActivity(response);
      setIsDisplayView(true);
    });
  };

  const onClickCancelActivity = () => {
    setIsDisplayView(false);
  };

  const onClickEditActivity = (id: string) => {
    setIsDisplayForm(true);
  };

  const onClickCancelForm = () => {
    setIsDisplayForm(false);
  };

  const onCreateActivity = (newActivity: IActivity): void => {
    newActivity.id = uuid();
    agent.Activities.create(newActivity).then((response) => {
      //setActivity()
    });
  };

  const onSubmitActivity = (activity: IActivity) => {
    // axios
    //   .put(`http://localhost:5000/api/activities/${activity.id}`, activity)
    //   .then((response) => {
    //     // setActivity(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((err) => console.log(err));
    agent.Activities.edit(activity.id, activity).then((response) => {});
  };

  const onClickDeleteActivity = (id: string): void => {
    console.log(`activity delete id: ${id}`);
    axios
      .delete(`http://localhost:5000/api/activities/${id}`)
      .then((response) => {
        // setActivity(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const displayActivity =
    isDisplayView && activity ? (
      <ActivityView
        activity={activity}
        onCancelClick={onClickCancelActivity}
        onEditClick={onClickEditActivity}
      />
    ) : null;

  const displayFormActivity =
    isDisplayForm && activity ? (
      <ActivityForm
        onCreateNewActivity={onCreateActivity}
        onCancelFormMode={onClickCancelForm}
        onSubmitActivity={onSubmitActivity}
        editActivity={activity}
      />
    ) : isDisplayForm && isCreateAcitivty ? (
      <ActivityForm
        onCreateNewActivity={onCreateActivity}
        onCancelFormMode={onClickCancelForm}
        onSubmitActivity={onSubmitActivity}
        editActivity={undefined}
      />
    ) : null;

  return (
    <div className={style.Body}>
      <div className={style.list}>
        <ActivityList
          activities={activities}
          onClickViewHandler={onClickViewActivity}
          onClickDeleteHandler={onClickDeleteActivity}
        />
      </div>
      <div className={style.detail}>
        <div>{displayActivity}</div>
        <div>{displayFormActivity}</div>
      </div>
    </div>
  );
});

export default Body;
