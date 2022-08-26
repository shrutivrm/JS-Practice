
      /*** 
function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log("Your promise has been resolved");
                resolve();
            } else{
                console.log("Your promise has not been resolved");
                reject();
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Thanks for resolving");
}).catch(function(){
    console.log("It's OK");
})
            ***/

        
let students = [
    {name:"Shruti", Subject: "JavaScript"},
    {name:"Himanshu", Subject:"Data Science"}
]

function enrollStudents(student){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            students.push(student);
            console.log("Student has been enrolled.");

            const error = false;
            if(!error){
                resolve();
            } else{
                reject("Something went wrong");
            }
        }, 1000);

    });
    
}


function printStudents(){
    
        students.forEach(function (student){
            console.log(student.name);
        });
   
    console.log("Students have been printed");
}

let std = {name:"Vidhi", Subject:"Machine Learning"};
//enrollStudents(std)
//.then(printStudents)
//.catch(err => console.log(err));

async function init(){
    await enrollStudents(std);
    printStudents();
}

init();


        
        /**

const promise1 = Promise.resolve("Hii, I'm Shruti Verma");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("goodbye");
    }, 2000);
});

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values)
    );

    */
