var go_to_park = function() {
   this.location = "park";
   this.hungry = true;
};

var eat = function() {
   this.hungry = false;
};

var party = function() {
   console.log(this.name + " dances wildly");
};

var meow = function(){
   console.log(this.name + " meowed");
};

var fetch_adder = function (obj){
   obj.fetch = function(){
      this.has_stick = "Good boy!";
      console.log(this.has_stick);
   };
};

var nap_adder = function(obj){
   obj.nap = function(){
      this.is_sleep = true;
   };
};

var dog_breeder = function (type, age, available){
   var puppy = {};

   puppy.type = type;
   puppy.age = age;
   puppy.available = "available";

   puppy.sold = function(){
      this.available = "sold";
   };
   return puppy;
};

var puppy1 = dog_breeder('mix', '3 months', true);
var puppy2 = dog_breeder('pure', '6 months', true);

console.log(puppy1);
puppy1.sold();
console.log(puppy1);


var dog1 = {
   name: "Shanti",
   location: "Asheville",
   favorite_food: "bacon",
   hungry: true,
   goToPark: go_to_park,
   eating: eat,
   partying: party
};

var dog2 = {
   name: "Coley",
   location: "Asheville",
   favorite_food: "chicken",
   hungry: true,
   goToPark: go_to_park,
   eating: eat,
   partying: party
};

var cat1 = {
   name: "mr. catty",
   talk: meow
};

var cat2 = {
   name: "lady jezebel",
   talk: meow
};

console.log(dog1);
fetch_adder(dog1);
console.log(dog1);
console.log(dog1.fetch);

// cat1.talk();
// cat2.talk();

// console.log(dog1.location);
// dog1.goToPark();
// console.log(dog1.location);
