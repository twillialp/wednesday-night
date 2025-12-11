import axios from 'axios'

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5M2E2NTA3OGZlNGNhOWVlZWQxNDMxZiIsInVzZXJuYW1lIjoiYWF0ZXN0MTIzIiwiZW1haWwiOiJlbWFpbDJAdGVzdC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjU0MzQ2NjcsImV4cCI6MTc2NTUyMTA2N30.CFB9Z6tlYAaJ0CWsgGQtN1M4L9_6a2hhlW5iTE3zHDM"
    }
});