var address = function (street, city) {
    if ((street = "Redmond Way") && (city = "Redmond")) {
        return 98052;
    }
    else {
        return null;
    }
};
alert(address("Redmond Way", "Redmond"));
