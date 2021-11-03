const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  })


conn.setEncoding('utf8')
conn.on('connect', () => {
  console.log("Successfully connected to game server" )
})
conn.on('data', (data) => {
  console.log('Server says: ', data)
})
conn.on('connect', () => {
  conn.write('Name: ABG');
  //setInterval(() => conn.write("Move: up"), 1000);
});
return conn;
}
module.exports = {connect}