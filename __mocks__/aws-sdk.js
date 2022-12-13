const original = jest.requireActual("aws-sdk");

const mockGetQueueUrl = jest.fn((args) => {
  console.log("mock getQueueUrl", args);
  return {
    promise: async () => "TODO queueUrlRes",
  };
});

const MockSQS = jest.fn(() => {
  console.log("mockSQS");
  return {
    getQueueUrl: mockGetQueueUrl,
  };
});

module.exports = {
  ...original,
  SQS: MockSQS,
  mockGetQueueUrl,
};
