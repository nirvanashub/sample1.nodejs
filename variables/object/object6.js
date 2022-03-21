// function inside object
const person = {
    fname : 'somesh',
    lname : 'parmar',
    fullname : function() {
        return 'full name is ${this.fname} ${this.lname}'
    }
}
console.log(person.fullname());
