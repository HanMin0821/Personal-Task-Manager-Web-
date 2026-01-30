# Personal Task Manager

A simple task management application built with React.

## Features

1. Task list
●Display a list of tasks from hardcoded mock data.
●Each task: title, description, status (pending/completed).
2. Add new tasks
●Provide a form to add a new task.
●New task updates state and appears in the list.
3. Edit tasks
●Edit title and description of an existing task.
4. Delete tasks
●Remove a task from the list.
## Technology Stack
- React
- React Router
- CSS modules 

## Setup and Running

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open in browser**:
    Navigate to http://localhost:5173

## Project Structure

- `src/App.jsx`: Main application component, handles routing and state.
- `src/tasks/Tasks.jsx`: Displays the list of tasks and the "Add Task" form.
- `src/tasks/TaskDetails.jsx`: Displays task details and the "Edit Task" form.
