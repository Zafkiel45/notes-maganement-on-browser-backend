#!/bin/bash

MODE=$1

echo "Iniciando Backend e Frontend..."

# Inicia backend
gnome-terminal -- bash -c "cd ~/projetos/backend && bun run start; exec bash"

# Aguarda 2 segundos
sleep 2

# Inicia frontend com base na flag
if [ "$MODE" == "dev" ]; then
  echo "Modo desenvolvimento ativado para o Frontend"
  gnome-terminal -- bash -c "cd ~/projetos/frontend && npm run dev; exec bash"
else
  echo "Modo preview ativado para o Frontend"
  gnome-terminal -- bash -c "cd ~/projetos/frontend && npm run preview; exec bash"
fi
