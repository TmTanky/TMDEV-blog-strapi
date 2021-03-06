module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_SECRET,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });