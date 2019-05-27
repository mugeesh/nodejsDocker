const express = require('express');
const redis = require('redis');

const process=require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits',0);
app.get('/', (req,res) => {
  client.get('visits',(err,visits )=> {
    //process.exit(10);
    res.send('Number is visits is '+visits);
    client.set('visits', parseInt(visits)+1);
    if(visits=='10'){
      process.exit(10);
    }

  });
});

app.listen(8081, () =>{
console.log('listing on the port 8081');
});