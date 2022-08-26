
class student{
    constructor(name, standard, rollno, dob){
        this.name = name;
        this.standard = standard;
        this.rollno = rollno;
        this.dob = dob;
    }

    age(){
        let date = new Date();
        let year = date.getFullYear();
        console.log(`${this.name} age is ${year - this.dob}`);
    }

    slogan(){
        console.log('Hey!!, My school is best');
    }

    //static function can be used without creating the object of the class.
    static add(a,b){
        return (a + b);
    }
}
let s1 = new student("Shruti", 12, 21, 2001);
s1.name;
s1.age();

//console.log(student.add(2,4));

class programmer extends student{
    constructor(name, standard, rollno, dob, language){
        super(name, standard, rollno, dob);
        this.language = language;
    }

    favouriteLanguage(){
        if(this.language == 'python') console.log(`${this.name} favourite language is python`);
        else console.log(`${this.name} favourite language is JavaScript`);
    }
}

let p1 = new programmer("Shruti", 12, 21, 2001, "java");
console.log(p1.name);
p1.favouriteLanguage();


class employee extends programmer{
    constructor(name, standard, rollno, dob, language, jobProfile){
        super(name, standard, rollno, dob, language);
        this.jobProfile = jobProfile;
    }

    isEngineer(){
        if(this.jobProfile == "engineer") console.log(`${this.name} is an Engineer`);
        else console.log(`${this.name} is not an Engineer`)
    }
}

let e1 = new employee("Shruti",12, 21, 2001, "java", "engineer");
e1.isEngineer();





/*function Car(givenName, givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run =  function(){
        console.log(`${this.name} car is running`);
    }
    this.analyze = function(){
        console.log(`${this.name} is slower by ${200-this.speed} Km/h by Mercedes`);
        
    }
}

let car1 = new Car("Audi", 180);
console.log(car1);


*/
