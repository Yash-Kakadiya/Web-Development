{ //Object Literals -> used to store keyed collections and complex entities
    //Object -> obejcts are collection of properties
    //father of all objects is window object

    // property => (key, value) pair
    // format -> propertyName(key): value;

    let student = {
        name: "Yash",
        age: 19,
        cgpa: 9.3,
        city: "Rajkot"
    };

    console.log(student);

    console.log(student.name);

    //JS automatically converts object keys into string so no specific rule for naming keys

    //Add / Update value
    student.city = "Mumbai";
    student.gender = "male";

    console.log(student);

    //Delete property

    delete student.cgpa;

    console.log(student);

    //Object Methods

    console.log(Object.keys(student));
    console.log(Object.values(student));
}
{ //Object of Objects

    let students = {
        stu1: {
            name: "Yash",
            age: 19,
            cgpa: 9.3,
            city: "Rajkot"
        },
        stu2: {
            name: "Ronit",
            age: 20,
            cgpa: 9.3,
            city: "Mumbai"
        },
        stu3: {
            name: "Mihir",
            age: 21,
            cgpa: 9.3,
            city: "Pune"
        }
    };

    console.log(students);

    console.log(students.stu1);

    console.log(students.stu1.name);
}

{ //Array of Objects

    let students = [
        {
            name: "Yash",
            age: 19,
            cgpa: 9.3,
            city: "Rajkot"
        },
        {
            name: "Ronit",
            age: 20,
            cgpa: 9.3,
            city: "Mumbai"
        },
        {
            name: "Mihir",
            age: 21,
            cgpa: 9.3,
            city: "Pune"
        }
    ];

    console.log(students);

    console.log(students[0]);

    console.log(students[0].name);
}

{ //Math object

    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.sqrt(4));
    console.log(Math.pow(2, 3));
    console.log(Math.abs(-21));
    console.log(Math.max(1, 2, 3, 4, 5));
    console.log(Math.min(1, 2, 3, 4, 5));
    console.log(Math.random());
    console.log(Math.floor(2.56447));
    console.log(Math.ceil(2.56447));

    //Random whole number

    //console.log(Math.floor(Math.random() * range) + start);

    console.log(Math.floor(Math.random() * 10) + 1);
}