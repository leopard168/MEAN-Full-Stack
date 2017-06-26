 var days = ["Mon.", "Tue.","Wed.","Thu,","Fri.","Sat.","Sun."];

 for (var index in days){

 	console.log("It's  " + days[index] );
 }

 var obj = {

 	name: "My Object",
 	value: 8,
 	getValue: function() { 
              return this.name;
 	          }
 }


console.log(obj["name"] );

console.log(obj["value"] );

 console.log(obj.getValue() ); 


   var user = new Object();
   user.name = "张三" ;
   user.age  = 18;
   user.getUser = function() { 
   	               return this.name + " " + this.age;
   	              }

  
console.log(user.name);

console.log(user.age );

 console.log(user.getUser() ); 


  
  function User(name, age) {
   this.name = name ;
   this.age  = age;
   this.getUser = function() { 
   	               return this.name + " " + this.age;
   	              }

   }

   var user = new User("张三",18);

   console.log(user.name);

    console.log(user.age );

    console.log(user.getUser() ); 



//--------------------

 function UserP(name, age) {
   this.name = name ;
   this.age  = age;
   }

  UserP.prototype = {

     getUser: function() {

       return ("prototype=" + this.name + " " + this.age);
     }

  };


   var user = new UserP("张三",18);

   console.log(user.name);

    console.log(user.age );

    console.log(user.getUser() ); 











