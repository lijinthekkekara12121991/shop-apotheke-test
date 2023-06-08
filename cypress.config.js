module.exports = {
  projectId: "8x94nr",
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */
      })
    },
    env: {
      APP_URL: 'https://www.shop-apotheke.com/',
      API_URL: 'https://api.sa-tech.de/static',
      USERNAME: 'shop-user@redteclab.com',
      PASSWORD: 'aA1!bB2@cC3#dD4$'
    },
  },
};
