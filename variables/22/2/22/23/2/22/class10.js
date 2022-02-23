class Mall {
shopname = 'mahakal_saloon';
city = 'pune';
shopispresent(){
return `${this.shopname} is situated in ${this.city}`;
}
}
class Shop extends Mall {
mallname = 'db';
showshop() {
return `${this.mallname} is situated in ${this.city}`;
}
}
const newMall = new Shop;
console.log(newMall);
console.log(newMall.showshop());
