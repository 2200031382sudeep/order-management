import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

const sns = new AWS.SNS({ region: process.env.AWS_REGION });

export const sendNotification = (message) => {
  const params = {
    Message: message,
    TopicArn: process.env.AWS_SNS_TOPIC,
  };
  return sns.publish(params).promise();
};
