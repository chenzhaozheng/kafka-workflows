
const { Kafka } = require('kafkajs');
describe('/test/index.test.ts', () => {
  it('should test create producer with method', async () => {
        // 连接
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9093'],
    });
    const producer = kafka.producer();
    await producer.connect();
    const sendRes = await producer.send({
        topic: 'topic-test2',
        messages: [{ value: 'Hello KafkaJS user!' }],
    });
    console.info(sendRes);
    await producer.disconnect();
  });
});
