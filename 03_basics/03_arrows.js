
const user = {
    name : "vishwas",
    age : 18,
    welcomeMsg : function(){
        console.log(`${this.name}, Welcome to our site`);  //to access current context, use 'this' keyword

    }
}

user.welcomeMsg();