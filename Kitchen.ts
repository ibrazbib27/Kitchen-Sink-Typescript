class Kitchen {
    //steps 4 - 6, 8 variables
    private readonly myName: string;
    private readonly numberOfStates: number;
    private readonly additionResult: number;
    private readonly helloWorld: string;

    //step 10
    static readonly veggiesArr: string [] = ["carrots", "celery", "parsley", "spinach", "lettuce"];
    //step 11
    static readonly pet: {name: string, breed: string} = {name: "cat", breed: "half Himalayan, half Maine Coon"};
    //step 12
    static readonly friends: {name: string, age: number}[] = [{name: "Max", age: 18}, {name: "Samantha", age: 22}, {name: "Maya", age: 20}, {name: "Adam", age: 20}, {name: "Rey", age: 26}];
    //step 14 variable
    static wordLength: number;

    //steps 4 - 6, 8 variables assigned
    constructor(){
        this.myName = "Ibrahim Zbib";
        this.numberOfStates = 50;
        this.additionResult = 5 + 4;
        this.helloWorld = "Hello World!";
    }

    //step 8 function
     sayHello(): void{
         alert(`${this.helloWorld}`);
     }

     //step 9 and 12 function
     checkAge(name: string, age: number): void{
        if(age < 21)
            alert(`Sorry ${name}, you aren't old enough to view this page!`);
     }

     //step 14 function
     getLength(characters: string): number{
        return characters.length;
     }


}
//step 4 - 6 variables assigned and step 8 variable assigned
let kitchen  = new Kitchen();

//step 8
kitchen.sayHello();

//step 9
kitchen.checkAge("Charles", 21);
kitchen.checkAge("Abby", 27);
kitchen.checkAge("James", 18);
kitchen.checkAge("John", 17);


//step 10
Kitchen.veggiesArr.forEach(veggie => console.log(veggie));

//step 11
console.log(`My pet ${Kitchen.pet.name} is ${Kitchen.pet.breed}`);

//step 12
Kitchen.friends.forEach(friend => kitchen.checkAge(friend.name, friend.age));

//step 14
Kitchen.wordLength =  kitchen.getLength("Hello World");
if(Kitchen.wordLength % 2 === 0)
    console.log("The world is nice and even!");
else
    console.log("The world is an odd place!");

