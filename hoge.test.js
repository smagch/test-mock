jest.mock("aws-sdk")
const { testFunc } = require("./hoge");
const { mockGetQueueUrl } = require("aws-sdk");

test("testFunc", async () => {
  const result = await testFunc();
  expect(result).toBe("TODO queueUrlRes");
  expect(mockGetQueueUrl).toBeCalledWith({ QueueName: "foobar" });
})
