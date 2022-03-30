// In es6 defining constructor is not necessary, this keyword is also not necessary while defining parameteres
class Employee {
name = 'shubham';
experience = 4;
slogan(){
    return `i am ${'shubham'} and this company is the best`;

}
}
Employee = new Employee();
console.log(Employee);
console.log(Employee.slogan());