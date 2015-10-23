var person = {
   name: "matt",
   location: "asheville",
   student: true,
   hobbies: ["coding", "photography"],
   dog:  {
      name: "shanti",
      toys: "sticks"
   },
   party: function(){
      console.log("hi, hi, hi");
   },
   method: function(){
      console.log("being invoked");
      console.log(this);
   }
};



console.log(person.student);

// person.method();
//
// var freestandingFn = function (){
//    console.log(arguments);
//    console.log('---');
//    console.log(this);
// };
//
// freestandingFn(1, true, "string");
