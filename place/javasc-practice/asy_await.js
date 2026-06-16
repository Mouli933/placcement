//aysn
//waiting for 2 seconds
// await waits for promise completion and then returns the result
// this is cleaner than using then and catch
// used in modern node.js

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully");
        },4000);
    });
}

async function displayData(){
    console.log("Fetching data...");
    let result = await fetchData();
    console.log(result);
}
displayData();