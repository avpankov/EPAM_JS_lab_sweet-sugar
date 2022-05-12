// Describe base class Entity that can store name
// Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user
// Add example of usage of these classes, e.g., create some instances, display data related to them
// Push code to repo “sweet sugar”

class Entity {
    constructor(name) {
        this.name = name;
    }
}

class Box extends Entity {
    constructor(name) {
        super(name)
    }
    stuff = [];
}

class Stuff extends Entity {
    constructor(name) {
        super(name);
        this.name = name;
    }
}

class User extends Entity {
    constructor(name) {
        super(name);
        this.name = name;
    }
    property = [];
}

let pencilBox = new Box('pencilBox'),
    pen = new Stuff('pen'),
    pencil = new Stuff('pencil'),
    user = new User('Artyom');

pencilBox.stuff.push(pen.name);
pencilBox.stuff.push(pencil.name);

if (user.name === 'Artyom') {
    user.property.push(pencilBox);
} else console.log('Not the property of the user')

console.log(user.property);