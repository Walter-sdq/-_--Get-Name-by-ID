// model.js
// model.js

class AttendantModel {
    constructor() {
        this.personData = [
            // Your array of data here
        ];
        this.listData = JSON.parse(localStorage.getItem('listData')) || [];
    }
    // Other methods remain the same...
    getAttendantNameByCode(id) {
        const person = this.personData.find(person => person.id === id);
        return person ? person.name : "❌ Can't find your name. Please confirm your code or type in a code.";
    }

    addToList(personName) {
        this.listData.push(personName);
        localStorage.setItem('listData', JSON.stringify(this.listData));
    }
}
