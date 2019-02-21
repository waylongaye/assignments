// example of classes
class Person {
constructor(name, hairColor, age){
this.name = name;
this.hairColor = hairColor;
this.age = age;
}

speak (){
console.log(this.name + ' is my name')
}

growOlder (){
this.age++
}
}