// enum Response1 {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: Response1): void {
//     console.log(message);
// }

// console.log(respond("Princess Caroline", Response1.Yes));


// window.onmousedown = function (mouseEvent) {
//     console.log(mouseEvent.button);   //<- OK
//     console.log(mouseEvent.kangaroo); //<- Error!
// };

// window.onscroll = function (uiEvent:any) {
//     console.log(uiEvent.button); //<- Error!
//     console.log(uiEvent.view);
// }

// interface Named {
//     name: string;
// }

// class Person {
//     name: string;
// }

// let p: Named;
// // OK, because of structural typing
// p = new Person();


// const users = [
//     { id: 1, name: 'alice' },
//     { id: 2, name: 'bob' },
//     { id: 3, name: 'cathy' },
//     { id: 4, name: 'daniel' },
// ]
// function renderUser(id:number, name:string) {
//     return `<div id="${id}">${name.toUpperCase()}</div>`
// }
// const html = users
//     .map(x => renderUser(x.id, x.id))
//     .join('\n')

interface Profile {
    name: string;
    gender: 'man' | 'woman';
    age: number;
    height?: number;
}

function printProfile(profile: Profile) {
    console.log('name', profile.name);
    console.log('gender', profile.gender);
    console.log('age', profile.age);
    if (profile.height) {
        console.log('height', profile.height);
    }
}

printProfile({ name: 'GuangWong', gender: 'man', age: 23 });
