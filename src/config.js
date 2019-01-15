const dev = {
  STRIPE_KEY: "pk_test_DWwWqld9c5bH5xtULdbp0dKb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "hung-serverless-notes-app-dev"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xbaojmih9e.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BwPhuyoDO",
    APP_CLIENT_ID: "6v18dc9rmp7frqklc8gvd0qo69",
    IDENTITY_POOL_ID: "us-east-1:bcbcf47d-3107-41b2-b356-b075d5a22c6d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_DWwWqld9c5bH5xtULdbp0dKb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "hung-serverless-notes-app-prod"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-stack.seed-demo.club/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TwYpMXIJH",
    APP_CLIENT_ID: "6kfg0o7qo2i3ndk2ur906sc5fd",
    IDENTITY_POOL_ID: "us-east-1:f4c754b4-24f0-4754-8596-30afedece1fc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
