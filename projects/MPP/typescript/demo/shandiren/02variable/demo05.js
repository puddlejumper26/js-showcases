for (var i = 0; i < 10; i++) {
    //console.log(i);
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
