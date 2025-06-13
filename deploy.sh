#!/bin/bash

# === Configurações ===
PROJECT_DIR="/Users/suskosk/Documents/www/psi-website"
BUILD_DIR="$PROJECT_DIR/dist"
SERVER_USER="root"
SERVER_IP="82.25.70.142"
SERVER_DIR="/var/www/psi-website"

echo "🔧 Iniciando build do projeto..."
cd "$PROJECT_DIR" || exit 1
npm run build || { echo "❌ Build falhou!"; exit 1; }

echo "🧹 Limpando diretório remoto antigo..."
ssh $SERVER_USER@$SERVER_IP "rm -rf $SERVER_DIR/*"

echo "📦 Enviando arquivos para o servidor..."
scp -r $BUILD_DIR/ $SERVER_USER@$SERVER_IP:$SERVER_DIR/

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Acesse: http://$server_ip/"