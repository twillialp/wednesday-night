Discombobulated! — The Modern To-Do App for the Self-Aware

Discombobulated! is a full-stack project management platform built using the MERN stack. It's designed for individual users named Addy and provides an intuitive interface for managing projects and tasks while maintaining strict security, ownership-based authorization, and a responsive, modern UI.

This elegant creation integrates backend API architecture, authentication, authorization, full CRUD functionality, frontend state management, and deployment.

1. Overview

Discombobulated! is a collaborative project management application that supports:

• Secure user authentication
• Private project ownership
• Nested task management
• Authorization checks to ensure users can only access or modify what they own
• Optional project collaboration (stretch goal)
• A responsive React UI

This project builds on concepts learned in backend development, database design, React architecture, and deployment platforms.

2. Features
User Management

User registration with password hashing (bcrypt)

JWT-based login and protected sessions

Auth middleware for secure routes

Project Management

Create, read, update, and delete projects

Ownership-based authorization: Only project owners can view or modify

Dashboard showing all user-owned projects

Task Management

Nested tasks under each project

CRUD operations for tasks

Status field: "To Do", "In Progress", "Done"

Authorization: Only project owners can modify tasks

Frontend UI

Responsive layout (desktop/tablet/mobile)

Context API for user authentication

React Router for SPA navigation

Reusable component library (buttons, forms, project cards, task items)

Loading and error states everywhere

3. User Stories
User Management

As a new user, I can create an account and log in.

As a logged-in user, my session is managed securely.

I can log out at any time.

Project Management

I can create new projects with a name and description.

I can view a dashboard of all my projects.

I can view the details of a single project.

I can update or delete only the projects that I own.

Task Management

Within a project, I can create tasks with a title, description, and status.

I can view all tasks inside a project.

I can update tasks I own.

I can delete tasks from projects I own.

Collaboration (Stretch Goal)

As a project owner, I can invite other registered users.

As a collaborator, I can view/update tasks in projects I’m invited to.

4. Tech Stack
Frontend

React

React Router DOM

Context API

Fetch / Axios

Vite (build tool)

Backend

Node.js

Express

MongoDB Atlas

Mongoose ODM

JWT Authentication

bcrypt password hashing

dotenv for environment variables

Deployment

Render (backend Web Service)

Render (frontend Static Site)

5. Database Models
User

username

email

password (hashed using bcrypt pre-save hook)

projects: [ref → Project] (optional)

Project

name

description

owner: ref(User)

collaborators: [ref(User)] (stretch)

Task

title

description

status ("To Do", "In Progress", "Done")

project: ref(Project)

6. API Endpoints
Auth Routes — /api/auth
Method	Endpoint	Description	Auth
POST	/register	Create new user	Public
POST	/login	Log in user, return JWT	Public
Project Routes — /api/projects
Method	Endpoint	Description	Auth
GET	/	Get all projects for logged-in user	Protected
POST	/	Create new project	Protected
GET	/:id	Get single project (owner only)	Protected
PUT	/:id	Update project (owner only)	Protected
DELETE	/:id	Delete project (owner only)	Protected
Task Routes — Nested under Projects
Base URL: /api/projects/:projectId/tasks
Method	Endpoint	Description	Auth
GET	/	Get all tasks for project	Protected
POST	/	Create a new task	Protected
PUT	/:taskId	Update task	Protected
DELETE	/:taskId	Delete task	Protected
7. Known Issues / Future Enhancements

Add drag-and-drop task sorting

Collaboration (Stretch Goal)

Invite collaborators to a project

Collaborators may view/update tasks (but not delete the project)

Add real-time updates (WebSockets)

Add comments on tasks

Add notifications for collaborators

Add dark mode

8. Credits
Homepage Image: 
Built by Addy Williams as part of the MERN Stack Capstone Project for Per Scholas.

