const dev = {
  STRIPE_KEY: "pk_test_DWwWqld9c5bH5xtULdbp0dKb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upgraded-api-dev-attachmentsbucket-nxqmfmi8l7t9"
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
    BUCKET: "notes-app-upgraded-api-prod-attachmentsbucket-1dkit5nc8yp7v"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ftxgtojpnl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9vVt7Z5JV",
    APP_CLIENT_ID: "648durpe23ebtcrp3cmfsaukvt",
    IDENTITY_POOL_ID: "us-east-1:f5b5661b-f23e-4532-a49c-5f181a2628fa"
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
