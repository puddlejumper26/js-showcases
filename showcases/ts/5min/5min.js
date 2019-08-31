var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName;
}
var user = new Student("Jane", "User");
document.body.innerHTML = greeter(user);
