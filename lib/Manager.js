const Employee = require("./Employee");

class Manager extends Employee {

    constructor(firstName,lastName,id, email, officeNum) {
        
        super(firstName,lastName,id, email)

        this.id = id;
        this.officeNum = officeNum;
        
    }
    getRole() {
          const role = "Manager";
          return role;
    }
    
}
module.exports = Manager;