//Try, Catch & Finally

// try {
//     //code that might throw an error
// }
// catch(variableName) {
//     //code to be executed if an error occurs
// }finally{
//    //code to be executed regardless of the try / catch result
// }

let a = 7;
try {
    console.log(a);
} catch (err) {
    console.log("Error caught");
    console.log(err);               
} finally {
    console.log("Finally block");
}