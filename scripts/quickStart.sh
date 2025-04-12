#!/bin/bash

echo "Starting Backend and Frontend..."

# Paths (Change the paths to a correct directory)
BACKEND_PATH="/caminho/para/backend"
FRONTEND_PATH="/caminho/para/frontend"

# Start the backend in a new window 
gnome-terminal -- bash -c "cd '$BACKEND_PATH'; bun run start; exec bash"

# Waits 2 seconds
sleep 2

# Start the frontend in a new window 
gnome-terminal -- bash -c "cd '$FRONTEND_PATH'; npm run start; exec bash"

echo "Both servers have been started ✅."
