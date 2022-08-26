
            /** 
function printName() {
    console.log("Shruti Verma");
    return new Promise((resolve, reject) =>{
        resolve("Promise resolved");
        reject("Promise rejected");
    })
}
async function call() {
    console.log("Inside async function");
    let result = await printName();
    console.log('waiting for the result');
    console.log(result);
    console.log('After printing result');
}
console.log('getting started');
call();
console.log('This is outside the async function');
console.log('Hii, This is Shruti Verma');

        **/




function firstName(name) {
    console.log("This function returns first name");
    return new Promise((resolve) =>{
        resolve(name);
    })
}

function lastName(surname){
    console.log('This function returns last name');
    return new Promise((resolve, reject)=>{
        //if(surname != " "){}
        resolve(surname);
        reject("No surname available");
    })
}

async function printName(){
    console.log('This function prints the whole name');
    let firstname = await firstName("Shruti");
    console.log('fetched the first name');
    let lastname = await lastName("Verma");
    console.log('fetched the last name');
    console.log(firstname + " " + lastname);
}

console.log('getting started');
printName();
console.log("let's get to work");
console.log('This is outside the async function');
console.log('Hii, This is Shruti Verma');




/** 
function tester() {
    return new Promise(reject => {
        setTimeout(() => {
            reject('rejected');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await tester();
    console.log(result);
}

asyncCall();

**/










