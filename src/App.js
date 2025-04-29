import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const defaultTasks = [
    { id: 1, title: 'Pay Electricity', dueDate: '2025-04-07' },
    { id: 2, title: 'Grocery shoping', dueDate: '2025-05-14' },
    { id: 3, title: 'Play Games', dueDate: '2025-05-20' },
    { id: 4, title: 'Buy a Car', dueDate: '2025-05-27' },
    { id: 5, title: 'Buy Clothes', dueDate: '2025-06-30' }
  ];

  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>To Do Tracker</h1>
      </div>

      <div className="tasks-container">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
};

export default App;