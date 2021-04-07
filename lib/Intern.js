const Employee = require("./Employee");

class Intern extends Employee {
     constructor(firstName, lastName, id, email, school) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.id = id;
          this.school = school;
          this.email = email;

          super(firstName, lastName, id, email)
     }
     
     getRole() {
          const role = "Intern";
          return role;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;