
const user = {
    userName : "Vishwas",
    age : 18,
    welcomeMsg : function(){
        console.log(`${this.userName}, Welcome to our site`);  //to access current context, use 'this' keyword
        console.log(this);
    }
}

user.welcomeMsg();  //Vishwas, Welcome to our site
user.userName = "Rinku"
user.welcomeMsg();
console.log(this);