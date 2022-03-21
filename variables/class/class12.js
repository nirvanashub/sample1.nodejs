class covid19{
    constructor(symptoms){
        this.symptoms=symptoms;
    }
    covid19(){
    return `symptoms of covid-19 is ${this.symptoms}`    
}
}
class deltaVarient extends covid19{
    constructor(medicine){
        super("symptoms");
        this.medicine=medicine;
    }
    deltaVarient(){
        return `${this.medicine} helps to recover from ${this.symptoms} delta varient`
    }
}
const a=new covid19('high Fiver');
console.log(a.covid19());
const b=new deltaVarient('Remdisiver');
console.log(b.deltaVarient());