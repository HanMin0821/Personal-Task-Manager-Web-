import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TaskDetails.css';

const TaskDetails = ({ tasks, onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({ title: '', description: '', status: '' });

    useEffect(() => {
        const foundTask = tasks.find(t => t.id === parseInt(id));
        if (foundTask) {
            setTask(foundTask);
            setEditForm(foundTask);
        } else {
            // Task not found, redirect to home
            navigate('/');
        }
    }, [id, tasks, navigate]);

    if (!task) return <div>Loading...</div>;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleSave = () => {
        onUpdate(editForm);
        setIsEditing(false);
    };

    return (
        <div className="task-details-container">
            <button
                onClick={() => navigate('/')}
                className="back-btn"
            >
                Back to List
            </button>

            <div className="task-card">
                {!isEditing ? (
                    <>
                        <div className="task-header">
                            <h2 className="task-title-detail">{task.title}</h2>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="edit-btn"
                            >
                                Edit Task
                            </button>
                        </div>
                        <p className="task-description-detail">{task.description}</p>
                        <div>
                            <strong>Status: </strong>
                            <span className={`status-label ${task.status === 'completed' ? 'completed' : ''}`}>
                                {task.status.toUpperCase()}
                            </span>
                        </div>
                    </>
                ) : (
                    <div className="edit-form">
                        <h3>Edit Task</h3>
                        <div>
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={editForm.title}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                value={editForm.description}
                                onChange={handleInputChange}
                                className="form-textarea"
                            />
                        </div>
                        <div>
                            <label className="form-label">Status</label>
                            <select
                                name="status"
                                value={editForm.status}
                                onChange={handleInputChange}
                                className="form-select"
                            >
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <div className="button-group">
                            <button
                                onClick={handleSave}
                                className="save-btn"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="cancel-btn"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskDetails;
