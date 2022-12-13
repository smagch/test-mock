const { SQS } = require("aws-sdk");

const testFunc = async () => {
  const client = new SQS({ apiVersion: "2012-11-05" });

  const queueUrlRes = await client
    .getQueueUrl({ QueueName: "foobar" })
    .promise();

  console.log('queueUrlRes', queueUrlRes);
  return queueUrlRes;
};

module.exports = {
  testFunc,
};
