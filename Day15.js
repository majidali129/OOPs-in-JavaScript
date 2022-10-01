// ##################### Classes in JS ################


// syntax of class
// class UserData{
//     constructor(){

//     }
// }

// class UserData{
//     constructor(userName,userAge,UserAddress){ // constructor is a built-in function , use to creat object blueprint
//         this.userName = userName;
//         this.userAge = userAge;
//         this.UserAddress = UserAddress;
//         // this is a js keyword . it refers to the current class . use to attach object properties with class.
//     }
// }
// class instantiation 
// creation of an Object from the class is called class instantiation
// let user1 = new UserData()

// class UserData{
//     constructor(userName,userAge,userAddress,relation){
//         this.userName = userName;
//         this.userAge = userAge;
//         this.userAddress = userAddress;
//         this.relation = relation;
//     }
// }
// let user1 = new UserData("Majid Ali" , 21, "Chishtian Mandi Punjab");
// let user2 = new UserData("Sajad Ali" , 41, "Purani Mandi Chishtian","big brother");
// console.log(user1)
// console.log(user2)

// ########## Constructor default Values ###############
// class Person {
//     constructor(
//       firstName = 'Asabeneh',
//       lastName = 'Yetayeh',
//       age = 250,
//       country = 'Finland',
//       city = 'Helsinki'
//     ) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//     }
//   }
  
//   const person1 = new Person() // it will take the default values
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
//   console.log(person1)
//   console.log(person2)

// ############# Methods in Class ################ 
// class UserData{
//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     fullInfo = ()=>{
//         return `My name is ${this.name}. I'm ${this.age} years old and I lives in ${this.address}`;
//     }
// }
// let user1 = new UserData("Majid Ali",21,"129 Murad , Tehsil Chishtian , Bahawalnagar");
// let user2 = new UserData("M.Salman",22,"174 Murad , Tehsil Chishtian , Bahawalnagar");
// console.log(user1)
// console.log(user2)
// console.log(user1.fullInfo())
// console.log(user2.fullInfo())

// ################## Setters and Getters in JS classes ################### 
// ###### Setter & Getter Example #######
// class UserData{
//     constructor(fName,lName,age,address){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//         this.address = address;
//         this.skills = [];
//         this.interest = [];
//     }
//     get getSkill(){
//         return this.skill;
//     }
//     get getInterest(){
//         return this.interest
//     }
//     set setSkill(skill){
//         this.skills.push(skill)
//     }
//     set setInterest(interest){
//         this.interest.push(interest);
//     }
// }
// let user1 = new UserData("Majid", "Ali", 21,"129M")
// let user2 = new UserData("Sajad", "Ali", 24,"129M")
// console.log(user1)
// console.log(user2)
// user1.setSkill = "HTML"
// user1.setSkill = "CSS"
// user1.setSkill = "JavaScript"
// user1.setInterest = "Football"
// user1.setInterest = "Kabbadi"
// user1.setInterest = "Coding"
// user2.setSkill = "Bootstrap"
// user2.setSkill = "Sass"
// user2.setSkill = "React"
// user2.setInterest = "Reading"
// user2.setInterest = "Riding"
// user2.setInterest = "Playing Games"
// console.log(user1)
// console.log(user2)

// #### Example of Setter & getter ######

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 
//         && this.skills.slice(0, this.skills.length - 1).join(', ') 
//         + `and ${this.skills[this.skills.length - 1] }`
//       let formattedSkills = skills ? `He knows ${skills}` : ''
  
//       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }
  
//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
//   const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')
  
//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'
//     console.log(person1.getPersonInfo())
  
//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'
  
//   console.log(person1.getScore)
//   console.log(person2.getScore)
  
//   console.log(person1.getSkills)
//   console.log(person2.getSkills)
//   console.log(person3.getSkills)
  
//   console.log(person1.getPersonInfo())
//   console.log(person2.getPersonInfo())
//   console.log(person3.getPersonInfo())


// ###################################### Class Properties ########################## 
//  Exercises 
// class Animal{
//     constructor(name,age,color,legs){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.legs = legs;
//     }

//     Name(){
//         return this.name;
//     }
//     age(){
//         return this.age;
//     }
//     fullInfo(){
//         return `${this.name} , ${this.age} ,${this.legs} , ${this.color}`
//     }
//     favourite(){
//         `${this.name} always like to fight`
//     }
// }
// let animal1 = new Animal("Kaalu",10,"black",4);
// console.log(animal1);

// class Dog extends Animal{

// }
// let dog1 = new Dog("tommy",1,"white",4)
// console.log(dog1)

// class Cat extends Animal{

// }
// let cat1 = new Cat("Maano",2,"Brown",4)
// console.log(cat1)

// class Cat extends Animal{
//     constructor(name,age,color,legs,diet){
//         super(name,age,color,legs);
//         this.diet =diet;
//     };
//     fullInfo(){
//         return `${this.name} ,${this.color}`
//     };
//     favourite(){
//         return `${this.name} like to eat fish`
//     }


// }
// let cat1 = new Cat("Maano",2,"white",4,"fish")
// console.log(cat1)
// console.log(cat1.fullInfo())
// console.log(cat1.favourite())


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// class PersonAccount{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.income = 0;
//         this.expense = 0;
//     };
//     totalIncom(){
//         return  `Total Income of ${this.firstName} is ${this.incomes}`
//     }
//     totalExpense(){
//         return `My total Expenses are ${this.expenses}`
//     }
//     accountInfo(){
//         return `Person name is ${this.firstName} ${this.lastName} . His monthly income is ${this.incomes} and he manage all of its expenses with this amount .`
//     };
    
//     get getIncome(){
//         return this.income;
//     }
//     get getExpense(){
//         return this.expense;
//     }
//     set setIncome(income){
//         this.income += income
//     }
//     set setExpense(expense){
//         this.expense += expense
//     };
//     get accountBalance(){
//         return (this.income - this.expense);
//     }
    
// }

// let p1 = new PersonAccount("Majid","Ali");
// p1.setIncome = 5000;
// p1.setIncome = 10000;
// p1.setIncome = 20000;
// p1.setExpense = 4000;
// p1.setExpense = 10000;
// console.log(p1.income)
// console.log(p1.expense)
// console.log(p1.accountBalance)




















  



































































