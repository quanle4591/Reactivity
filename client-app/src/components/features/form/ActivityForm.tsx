import { useState } from "react";
import { IActivity } from "../../app/models/activity";
import style from "./ActivityForm.module.css";

interface Props {
  onCreateNewActivity: (newAct: IActivity) => void;
  onCancelFormMode: () => void;
  editActivity: IActivity;
}

const ActivityForm = (props: Props) => {
  let currentActivityForm: IActivity = {
    id: "",
    title: "",
    description: "",
    category: "",
    date: new Date(),
    city: "",
    venue: "",
  };

  if (props.editActivity.id != "") {
    currentActivityForm = props.editActivity;
  }

  const [actForm, setActForm] = useState(currentActivityForm);

  const submitNewActivity = () => {
    console.log(currentActivityForm);
    // props.onCreateNewActivity(currentActivityForm);
  };

  const cancelFormMode = () => {
    props.onCancelFormMode();
  };

  return (
    <div className={style.formContainer}>
      <input
        className={style.input}
        type="text"
        placeholder="Title"
        value={currentActivityForm.title}
        onChange={(e) => {
          setActForm({
            ...actForm,
            title: e.target.value,
          });
          currentActivityForm.title = e.target.value;
        }}
      />
      <textarea
        className={style.input}
        placeholder="Description"
        value={currentActivityForm.description}
        onChange={(e) => {
          setActForm({
            ...actForm,
            description: e.target.value,
          });
          currentActivityForm.description = e.target.value;
        }}
      />
      <input
        className={style.input}
        type="text"
        placeholder="Category"
        value={currentActivityForm.category}
        onChange={(e) => {
          setActForm({
            ...actForm,
            category: e.target.value,
          });
          currentActivityForm.category = e.target.value;
        }}
      />
      <input className={style.input} type="text" placeholder="Date" />
      <input
        className={style.input}
        type="text"
        placeholder="City"
        value={currentActivityForm.city}
        onChange={(e) => {
          setActForm({
            ...actForm,
            city: e.target.value,
          });
          currentActivityForm.city = e.target.value;
        }}
      />
      <input
        className={style.input}
        type="text"
        placeholder="Venue"
        value={currentActivityForm.venue}
        onChange={(e) => {
          setActForm({
            ...actForm,
            venue: e.target.value,
          });
          currentActivityForm.venue = e.target.value;
        }}
      />
      <div className={style.button}>
        <button
          style={{ marginRight: "15px", color: "black" }}
          onClick={cancelFormMode}
        >
          Cancel
        </button>
        <button
          style={{ backgroundColor: "#4caf50" }}
          onClick={submitNewActivity}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ActivityForm;
