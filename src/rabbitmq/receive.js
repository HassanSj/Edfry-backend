import {connect} from "amqplib";
const connection = await connect('ampq://localhost')
const channel = await connection.createChannel()


const queue = 'messages';

await channel.assertQueue(queue , {durable : false});

channel.consume(queue , (msg)=>{
    console.log()
})