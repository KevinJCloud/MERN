# Task Manager — DevOps Practice Application

A deliberately small full-stack application for practicing:
React -> REST API -> Node/Express -> MongoDB -> Docker -> Kubernetes -> CI/CD.

## Application features
- View tasks
- Add a task
- Mark a task complete
- Delete a task

## API
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
- GET /api/health

## Your DevOps challenge

Do NOT write Kubernetes manifests immediately.

1. Run the frontend and backend locally.
2. Inspect the frontend and identify how it calls the API.
3. Inspect the backend and identify its listening port and routes.
4. Identify the MongoDB connection variable.
5. Dockerize frontend, backend, and MongoDB.
6. Create Kubernetes Deployments and Services.
7. Make frontend -> backend -> MongoDB work in Kubernetes.
8. Add an Ingress so the browser can reach the application.
9. Then create a Jenkins pipeline.
10. Finally add security scanning and monitoring.

The repository intentionally does not include Kubernetes manifests or Jenkinsfiles. Those are your exercises.

## Local run

Start MongoDB locally, then:

### Backend
cd backend
npm install
npm start

### Frontend
cd frontend
npm install
npm run dev

The frontend expects the API at:
http://localhost:5000

You can change it with VITE_API_URL.

## Important

This is a learning application, not a production-ready system.
