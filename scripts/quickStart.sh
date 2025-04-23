#!/bin/bash

MODE=$1

echo "Iniciando Backend e Frontend..."

# start the application in development or producton mode
if [ "$MODE" == "dev" ]; then
  # start backend
  gnome-terminal -- bash -c "bun run start dev; exec bash"
  # await 2 seconds
  sleep 2
  gnome-terminal -- bash -c "npm run dev; exec bash"
  echo "Development mode activated"
else
  gnome-terminal -- bash -c "bun run start; exec bash"
  sleep 2
  gnome-terminal -- bash -c "npm run preview; exec bash"
  echo "Production mode activated"
fi
