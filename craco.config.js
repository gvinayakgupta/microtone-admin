const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#e76806',
              '@link-color': '#e76806',
              '@success-color': '#4fbd19',
              '@font-size-base': '16px',
              '@heading-color': 'rgba(0, 0, 0, 0.98)',
              '@text-color': 'rgba(0, 0, 0, 0.85)',
              '@text-color-secondary': 'rgba(0, 0, 0, 0.75)'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};