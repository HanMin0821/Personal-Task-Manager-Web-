import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tasks.css';

const Tasks = ({ tasks, onAdd, onDelete }) => {
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!newTask.title || !newTask.description) return;

        onAdd(newTask);
        setNewTask({ title: '', description: '' });
    };

    return (
        <div className="tasks-container">
            <div className="add-task-form-container">
                <h3>Add New Task</h3>
                <form onSubmit={handleAddTask} className="add-task-form">
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Task Title"
                            value={newTask.title}
                            onChange={handleInputChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <textarea
                            name="description"
                            placeholder="Task Description"
                            value={newTask.description}
                            onChange={handleInputChange}
                            className="textarea-field"
                        />
                    </div>
                    <button type="submit" className="add-btn">
                        Add Task
                    </button>
                </form>
            </div>

            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}>
                        <div className="task-content">
                            <div className="task-details">
                                <Link to={`/task/${task.id}`} className="task-link">
                                    <h3 className="task-title">{task.title}</h3>
                                </Link>
                                <p className="task-description">{task.description}</p>
                                <span className={`status-badge ${task.status === 'completed' ? 'completed' : ''}`}>
                                    {task.status.toUpperCase()}
                                </span>
                            </div>
                            <button
                                onClick={() => onDelete(task.id)}
                                className="delete-btn"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
