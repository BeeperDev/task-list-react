import { useState } from "react"; // making this state global so mutiple components can access it

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      // if form is empty, don't submit
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    // on submit, reset the form inputs
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text} // value is the text from the state. Overridding the default behavior of the form and assigning the text to the state
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day/Time</label>
        <input
          type="text"
          placeholder="Add Day/Time"
          value={day} // value is the text from the state. Overridding the default behavior of the form and assigning the text to the state
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder} //
          value={reminder} // value is the text from the state. Overridding the default behavior of the form and assigning the text to the state
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
