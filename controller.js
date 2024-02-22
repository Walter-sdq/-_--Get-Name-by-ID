// controller.js

class AttendantController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Bind event handlers
        this.view.bindCodeInput(this.handleCodeInput.bind(this));
        this.view.bindCheckButton(this.handleCheckButton.bind(this));

        // Initialize view
        this.updateListInfo();
    }

    handleCodeInput(inputCode) {
        const attendantName = this.model.getAttendantNameByCode(inputCode);
        this.view.displayAttendantName(attendantName);
    }

    handleCheckButton(personName) {
        this.model.addToList(personName);
        this.view.addNameToList(personName);
        this.updateListInfo();
    }

    updateListInfo() {
        const totalRegistered = this.model.personData.length;
        const totalPresent = this.model.listData.length;
        this.view.displayListInfo(totalRegistered, totalPresent);
    }
}
