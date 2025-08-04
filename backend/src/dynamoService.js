import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
});

export const saveMetadata = (metadata) => {
  const params = {
    TableName: process.env.AWS_DYNAMO_TABLE,
    Item: metadata,
  };
  return dynamoDB.put(params).promise();
};
