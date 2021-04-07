const Employee = require("./Employee");

class Intern extends Employee {
     constructor(firstName, lastName, id, school) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.id = id;
          this.school = school;
          this.email = this.generateEmail();
     }
     super(firstName, lastName, id)
     getRole() {
          const role = "Intern";
          return role;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;