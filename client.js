const net = require('net');
const { IP, PORT } = require("./constant");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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