// view.js

class AttendantView {
    constructor() {
        this.inputCodeField = document.getElementById("inputCode");
        this.personNameElement = document.getElementById("attendantName");
        this.checkButton = document.getElementById('present');
        this.listElement = document.getElementById('list');
        this.listInfoElement = document.querySelector('.list_info');
    }

    bindCodeInput(handler) {
        this.inputCodeField.addEventListener("input", () => {
            const inputCode = this.inputCodeField.value;
            handler(inputCode);
        });
    }

    bindCheckButton(handler) {
        this.checkButton.addEventListener('click', () => {
            handler(this.personNameElement.textContent);
        });
    }

    displayAttendantName(attendantName) {
        this.personNameElement.textContent = attendantName;
    }

    displayListInfo(totalRegistered, totalPresent) {
        this.listInfoElement.innerText = `${totalRegistered} persons registered and ${totalPresent} is/are present`;
    }

    addNameToList(personName) {
        let namePrint = document.createElement('p');
        namePrint.innerText = personName;
        this.listElement.appendChild(namePrint);
    }
}
