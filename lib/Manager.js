const Employee = require("./Employee");

class Manager extends Employee {

    constructor(firstName,lastName,id, email, officeNum) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id
        this.officeNum = officeNum;
        this.email = email;
        
        super(firstName,lastName,id, email)
    }
    getRole() {
          const role = "Manager";
          return role;
    }
    
}
module.exports = Manager;