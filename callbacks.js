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