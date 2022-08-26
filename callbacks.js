function homePage(callback){
    setTimeout(() => {
        console.log("This is Home Page, and is loading");
        callback();
    }, 5000);
    
}

function secondPage(){
    setTimeout(() => {
        console.log("This is second page, and is load only after complete loading of the Home Page");
    }, 1000);
    
}

homePage(secondPage);
//secondPage();
        





                /*
let students = [
    {name:"Shruti", Subject: "JavaScript"},
    {name:"Himanshu", Subject:"Data Science"}
]

function enrollStudents(student, callback){
    setTimeout(function(){
        students.push(student);

        console.log("Student has been enrolled.");
 
        callback();

    }, 8000);
}


function printStudents(){
    setTimeout(function(){
        students.forEach(function (student){
            console.log(student.name);
        });
    }, 1000);

    console.log("Students have been printed");
}


let std = {name:"Vidhi", Subject:"Machine Learning"};
//enrollStudents(std);
//printStudents();
enrollStudents(std, printStudents);
                */





