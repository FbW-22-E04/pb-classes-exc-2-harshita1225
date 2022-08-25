class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    console.log(`Employee ID: ${this.id}`);
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Tax ID:${this.taxId}`);
    console.log(`Pay: ${(this.salary / 12).toFixed(2)}`);
  }
}

let employee1 = new Employee(1, "Nina", "Twell", "741", 75000);

let employee2 = new Employee(2, "Jan", "Mächer", 584, 55000);

let employee3 = new Employee(3, "Lilly", "Kaur", 8457, 49000);

employee1.generatePaySlip();
console.log("-------------------");
employee2.generatePaySlip();
console.log("-------------------");
employee3.generatePaySlip();

///////////////////////////////////////////////////////////

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(name) {
    this.managedEmployees.push(name);
    return this.managedEmployees;
  }

  removeManagedEmployee(employee) {
    const idx = this.managedEmployees.findIndex(
      (item) => item.id === employee.id
    );
    return this.managedEmployees.splice(idx, 1);
  }
}
const manager1 = new Manager(1, "john", "smith", 145, 90000);

manager1.addManagedEmployee("hahn smith");
manager1.addManagedEmployee(employee1);
manager1.addManagedEmployee(employee2);
manager1.addManagedEmployee(employee3);

console.log(manager1);

manager1.removeManagedEmployee(employee2);
console.log(manager1);
