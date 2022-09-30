const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51LmlKXBaZvmSrpQsx03dm9POcrvs8hoCeGE2svTiM110BQbcPacRzjK3USWDVMwkKkz4Kf7LcaXBCO7ET2cUItJV00jywlp8JU",
  SENTRY_DSN:
    "https://db6622ad35d34536aec809eab44678f5@o4503901532520448.ingest.sentry.io/4503901543268354",
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
