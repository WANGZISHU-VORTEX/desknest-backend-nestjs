module.exports = {
  apps : [{
    name: 'desknest',
    script: 'dist/src/main.js',
    exec_mode: "fork",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "500M",
    env: {
      NODE_ENV: "development",
      PORT: 3000
    },
    env_production: {
      NODE_ENV: "production"
    },
    error_file: "logs/error.log",
    out_file: "logs/out.log",
    pid_file: "pids/nest-app.pid",
    combine_logs: true,
    log_date_format: "YYYY-MM-DD HH:mm Z"
  }, 
//  {
//    script: './service-worker/',
//    watch: ['./service-worker']
//  }
  ],

//  deploy : {
//    production : {
//      user : 'SSH_USERNAME',
//      host : 'SSH_HOSTMACHINE',
//      ref  : 'origin/master',
//      repo : 'GIT_REPOSITORY',
//      path : 'DESTINATION_PATH',
//      'pre-deploy-local': '',
//      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
//      'pre-setup': ''
//    }
//  }
};
