//sample worker script
// send ready message 
self.postMessage('READY');

//Sleep for two seconds
//Simulation long running operation
sleep(2000);

//Send completed message
self.postMessage('COMPLETED');

function sleep(miliseconds){
    var startingTime = new Date().getTime();
    var stopTime = startingTime + miliseconds;
    while(stopTime >= new Date().getTime()){}
}