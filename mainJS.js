function User(name){
    this.name = name;
}

User.prototype.work = function(who){
    console.log(who.name + " work");
}

var Vasya = new User("Vasya");
var Petya = new User("Petya");

Vasya.work(Vasya);