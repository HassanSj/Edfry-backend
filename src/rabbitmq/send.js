import {connect} from "amqplib";
const connection = await connect('ampq://localhost')
const channel = await connection.createChannel()


const queue = 'messages';
const message = 'Hi Bro';

await channel.assertQueue(queue , {durable : false});

channel.sendToQueue(queue , Buffer.from(message)
)