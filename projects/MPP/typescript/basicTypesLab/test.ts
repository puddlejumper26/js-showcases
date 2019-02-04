interface StreetFunc {
    (street: string, city: string): string;
}


var address: StreetFunc = function (street: string, city: string) {
    if ((street = "Redmond Way") && (city = "Redmond")) {
        return 98052;
    }
    else {
        return null;
    }
}
alert(address("Redmond Way", "Redmond"))