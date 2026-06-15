// 3 stages of a promise
// 1. pending
// 2. fulfilled
// 3. rejected

// having methods - then, catch, finally

let promise = new Promise((resolve, reject) => {

 let sucess = true;
 if(sucess){
    resolve("Promise is resolved");
 }else{
    reject("Promise is rejected");
    }  
});

promise.then(result=>console.log(result)).catch(error=>console.log(error)).finally(()=>console.log("Promise is completed"));