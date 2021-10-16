import { useState } from "react";
import { IActivity } from "../../app/models/activity";
import style from "./ActivityForm.module.css";

interface Props {
  onCreateNewActivity: (newAct: IActivity) => void;
  onSubmitActivity: (activity: IActivity) => void;
  onCancelFormMode: () => void;
  editActivity: IActivity | undefined;
}

const ActivityForm = (props: Props) => {
  let initialActivity: IActivity = props.editActivity ?? {
    id: "",
    title: "",
    description: "",
    category: "",
    date: new Date(),
    city: "",
    venue: "",
  };

  const [actForm, setActForm] = useState<IActivity>(initialActivity);

  const submitNewActivity = () => {
    if (actForm.id === "") {
      props.onCreateNewActivity(actForm);
      return;
    }
    props.onSubmitActivity(actForm);
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
        value={actForm.title}
        onChange={(e) => {
          setActForm({
            ...actForm,
            title: e.target.value,
          });
          actForm.title = e.target.value;
        }}
      />
      <textarea
        className={style.input}
        placeholder="Description"
        value={actForm.description}
        onChange={(e) => {
          setActForm({
            ...actForm,
            description: e.target.value,
          });
          actForm.description = e.target.value;
        }}
      />
      <input
        className={style.input}
        type="text"
        placeholder="Category"
        value={actForm.category}
        onChange={(e) => {
          setActForm({
            ...actForm,
            category: e.target.value,
          });
          actForm.category = e.target.value;
        }}
      />
      <input className={style.input} type="text" placeholder="Date" />
      <input
        className={style.input}
        type="text"
        placeholder="City"
        value={actForm.city}
        onChange={(e) => {
          setActForm({
            ...actForm,
            city: e.target.value,
          });
          actForm.city = e.target.value;
        }}
      />
      <input
        className={style.input}
        type="text"
        placeholder="Venue"
        value={actForm.venue}
        onChange={(e) => {
          setActForm({
            ...actForm,
            venue: e.target.value,
          });
          actForm.venue = e.target.value;
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
