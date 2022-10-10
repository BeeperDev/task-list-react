import { useState, useEffect } from "react"; // making this state global so mutiple components can access it
import Header from "./components/Header"; // bring in Header component to use
import Tasks from "./components/Tasks"; // bring in Header component to use
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    // // set state
    // {
    //   // 'tasks' is what we want to call this piece of state
    //   id: 1, // 'setTasks' is a function/method to update the tasks
    //   text: "Test",
    //   other: "no-show",
    //   day: "monday",
    //   reminder: true,
    // },
    // {
    //   text: "Test4",
    //   day: "Wednesday",
    //   reminder: false,
    //   id: 3,
    // },
    // {
    //   text: "Task6",
    //   day: "Thursday",
    //   reminder: true,
    //   id: 4,
    // },
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer); // allowing us to set initial state
    };
    getTasks();
  }, []); // dependency array, keep it empty

  // Fetch tasks data
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Fetch single task data
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE", // specify the method as an object
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    // spread fetched task into individual components, and flip value of reminder
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Left!"
      )}
    </div>
  );
};

export default App;
