            /***** 
let a = "Shruti Verma"
if(a != undefined){
    throw new Error("This is undefined");
} else{
    console.log('This is not undefined');
    
}

            *****/






            /*** 
try {
    console.log("We are inside try block");
   abshdjl
   console.log("If error occurs, this line will not execute, and our program will run to the catch block");
} catch (error) {
    console.log("This is an error");
    console.log(error);         //prints error by which try block has been failed
    console.log(error.name);    //prints the name of the error (in this case:  reference error)
    console.log(error.message);     //prints the message given by the error ( in this case: ajshido is not defined)
} finally{
    console.log('This block will always run, no matter what happen in try-catch block');
}

            ***/






const areaRectangle = (l, b) => {
    if(isNaN(l) || isNaN(b)){
        throw new Error("Parameters are not in numbers"); 
    } else{
        return l*b;
    }
}

try{
    areaRectangle(10, 'Shruti');
    //areaRectangle(10, 20);
} catch(error){
    console.log(error);
} 






