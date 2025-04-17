#!/bin/bash
# Exemplo de deploy no servidor

echo "Iniciando deploy..."

# Copiar os arquivos para o servidor
scp -r * $DEPLOY_USER@$DEPLOY_SERVER:/var/www/simple-node-app

# Reiniciar o serviço (se necessário)
ssh $DEPLOY_USER@$DEPLOY_SERVER "pm2 restart simple-node-app || pm2 start app.js"

echo "Deploy concluído!"
