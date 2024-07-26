module.exports = {
  apps: [
    {
      name: "Authentication Service",
      script: "./applications/authentication/server.js",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "100M",
    },
    {
      name: "Admin Service",
      script: "./applications/admin/server.js",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "100M",
    },
    {
      name: "Flight Service",
      script: "./applications/flight/server.js",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "100M",
    },
  ],
};
