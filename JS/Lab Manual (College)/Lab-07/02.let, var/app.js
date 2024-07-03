// 2. Demonstrate the difference between let and var.

//let => global scope
{
    let a = "let";
    // console.log(a);
    function abc(a) {
        // let a = "let in";
        console.log(a);
    }
    abc(a);
}
// //const => global scope
{
    const a = "const";
    // console.log(a);
    function abc(a) {
        // const a = "const in";
        console.log(a);
    }
    abc(a);
}
// // var  => function scope
{
    var a = "var";
    // console.log(a);
    function abc(a) {
        var a = "var in";
        console.log(a);
    }
    abc(a);
}


// //Scope
// { // 1.Global scope

//     let a = 7;

//     function func() {
//         console.log(a);
//     }

//     func();

//     console.log(a);
// }

// { // 2.Function scope
//     let a = 7;

//     function func() {
//         let a = 10; // function scope
//         console.log(a);
//     }

//     func();

//     console.log(a);
// }

// { // 3.Block scope

//     let a = 7;

//     {
//         let a = 10;
//         console.log(a);
//     }
// }

// { //4.Lexical scope
//     function func() {
//         let a = 123;
//         function func2() {
//             console.log(a); // lexical scope
//         }
//         func2();
//     }
//     func();
// }