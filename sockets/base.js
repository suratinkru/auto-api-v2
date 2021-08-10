module.exports = function (io) { 
console.log("ok");
let users = [];       
    io.on('connection', function(socket){
        console.log('A client connection occurred!');
        socket.on("testna",(data)=>{
            console.log(JSON.stringify(data));
        })
    });
 }