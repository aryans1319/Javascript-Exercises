// Empty Object
/*
const dog = {

}

Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
*/

const dog = {
     name : 'Sayan',
     legs : 4,
     color : 'brown',
     age : 20,
     bark : function(){
        return "woof woof";
     }
}

console.log(dog.name);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.bark());