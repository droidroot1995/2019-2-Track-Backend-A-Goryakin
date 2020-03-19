module.exports = {
  launch: {
    headless: true, // для отображения в клиенте
    ignoreHTTPSErrors: true,
  },
  server: {
    command: `npm start`,
    host: `localhost`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
}
