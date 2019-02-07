var employees = [];

function Employee(names, jobTitle, salary, status="Full time"){
    this.name = names;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;

}

var printEmployeeForm = new Employee("Waylon", "Developer", "$30/hr", "Part time");

var employeePam = new Employee("Pamela","Systems Architect", "$35/hr", "Contractor");

var employeeTim = new Employee("Timothy","Manager", "$25/hr");

employees.push(printEmployeeForm, employeePam, employeeTim);

console.log(employees);