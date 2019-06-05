function loggingIdentity(arg) {
    console.log(arg.length);
    return null;
}
loggingIdentity('asdfw');
loggingIdentity({ length: 10, value: 3 });
