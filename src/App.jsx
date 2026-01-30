import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tasks from './tasks/Tasks'
import TaskDetails from './taskDetails/TaskDetails'
import './App.css'

function App() {
  //mock data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Frontend Task",
      description: "Create a new frontend task.",
      status: "pending"
    },
    {
      id: 2,
      title: "Backend Task",
      description: "Remove Duplicates from an Unsorted Linked List",
      status: "pending"
    },

  ])

  const addTask = (newTask) => {
    const task = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      ...newTask,
      status: 'pending'
    }
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === parseInt(updatedTask.id) ? { ...t, ...updatedTask } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Personal Task Manager</h1>
        </header>
        <Routes>
          <Route path="/" element={<Tasks tasks={tasks} onAdd={addTask} onDelete={deleteTask} />} />
          <Route path="/task/:id" element={<TaskDetails tasks={tasks} onUpdate={updateTask} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
