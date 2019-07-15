// worker.js
// var i = 10;

// function timedCount() {
//     i = i + 1;
//     postMessage(i);
//     setTimeout("timedCount()", 500);
// }

// timedCount();

// self.onmessage = function (evt) {
//     postMessage(evt.data + '--worker.js里的附加信息hahaha');
// };

onmessage = function(evt) {
    postMessage(evt.data + '--worker.js里的附加信息hahaha');
};