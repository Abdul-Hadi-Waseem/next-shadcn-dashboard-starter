module.exports = {
  apps: [
    {
      name: "yes-jobs-admin",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
