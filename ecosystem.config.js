/* eslint-disable prettier/prettier */
module.exports = {
  apps : [{
    name: 'PrismaDemo',
    script: './dist/main.js',
    watch: '.',
    autorestart: true
  }],

  deploy : {
    production : {
      user : 'TRANLUAN',
      host : '192.168.1.90',
      ref  : 'origin/master',
      repo : 'https://github.com/tranluan258/prisma-demo.git',
      path : '.',
      'post-setup': 'yarn add && yarn build &&  pm2 start ecosystem.config.js --env production',
      'post-deploy' : 'yarn add && yarn build &&  pm2 reload ecosystem.config.js --env production',
      "ssh_options": [
        "StrictHostKeyChecking=no",
        "PasswordAuthentication=no"
      ]
    }
  }
};
