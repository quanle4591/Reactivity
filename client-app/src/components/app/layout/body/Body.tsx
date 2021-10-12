import axios from "axios";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import style from "./Body.module.css";
import { IActivity } from "../../models/activity";
// import store from "../../../store/store";
// import { detail, list } from "../../../store/actions/activityActions";
import ActivityList from "../../../features/activities/ActivityList";
import ActivityView from "../../../features/detail/ActivityView";
import ActivityForm from "../../../features/form/ActivityForm";

const Body = () => {
  const [activity, setActivity] = useState<IActivity>();
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [isDisplayView, setIsDisplayView] = useState(false);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => {
        // store.dispatch(list(response.data));
        setActivities(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickViewActivity = (id: string): void => {
    // const viewActivity = store
    //   .getState()
    //   .allActivities.find((act: IActivity) => act.id === id);
    // store.dispatch(detail(id));
    axios
      .get(`http://localhost:5000/api/activities/${id}`)
      .then((response) => {
        setActivity(response.data);
        setIsDisplayView(true);
      })
      .catch((err) => console.log(err));
  };

  const onClickCreateActivity = (newActivity: IActivity): void => {
    newActivity.id = "6b60618c-56e3-4e36-af62-2abea5a09293";
    console.log("Body New Act: ", newActivity);
    axios
      .post(`http://localhost:5000/api/activities`, newActivity)
      .then((response) => {
        setActivity(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const onClickCancelActivity = () => {
    setIsDisplayView(false);
  };

  const onClickEditActivity = (id: string) => {
    console.log(`Edit Activity: ${id}`);
    setIsDisplayForm(true);
    setIsCreateMode(true);
  };

  const onClickCancelForm = () => {
    setIsDisplayForm(false);
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
        onCreateNewActivity={onClickCreateActivity}
        onCancelFormMode={onClickCancelForm}
        editActivity={activity}
      />
    ) : null;

  return (
    <div className={style.Body}>
      <div className={style.list}>
        <ActivityList
          activities={activities}
          onClickViewHandler={onClickViewActivity}
        />
      </div>
      <div className={style.detail}>
        <div>{displayActivity}</div>
        <div>{displayFormActivity}</div>
      </div>
    </div>
  );
};

export default Body;
