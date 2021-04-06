const Employee = require("./Employee");

class Manager extends Employee {

    constructor(firstName,lastName,id,officeNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id
        this.officeNum = officeNum;
    }
    super(firstName,lastName,id)
}