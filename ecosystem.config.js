/* eslint-disable prettier/prettier */
module.exports = {
  apps: [{
    name: 'PrismaDemo',
    script: './dist/main.js',
    watch: '.',
    autorestart: true
  }],

  deploy: {
    production: {
      user: 'tluan',
      host: '192.168.1.99',
      key: 'deploy.key',
      ref: 'origin/master',
      repo: 'https://github.com/tranluan258/prisma-demo.git',
      path: '/home/tluan/prisma-demo',
      'post-setup': 'yarn add && yarn build &&  pm2 start ecosystem.config.js --env production',
      'post-deploy': 'git stash && yarn add && yarn build &&  pm2 reload ecosystem.config.js --env production',
      "ssh_options": [
        "StrictHostKeyChecking=no",
        "PasswordAuthentication=no"
      ]
    }
  }
};
