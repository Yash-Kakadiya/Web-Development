//Array of objects (students)

const students = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        major: "Computer Science",
        gpa: 3.8,
        year: "Junior",
        email: "alice.johnson@example.com"
    },
    {
        id: 2,
        name: "Bob Smith",
        age: 22,
        major: "Mathematics",
        gpa: 3.5,
        year: "Senior",
        email: "bob.smith@example.com"
    },
    {
        id: 3,
        name: "Carol Martinez",
        age: 19,
        major: "Biology",
        gpa: 3.9,
        year: "Sophomore",
        email: "carol.martinez@example.com"
    },
    {
        id: 4,
        name: "David Brown",
        age: 21,
        major: "Physics",
        gpa: 3.7,
        year: "Senior",
        email: "david.brown@example.com"
    },
    {
        id: 5,
        name: "Eva Wilson",
        age: 20,
        major: "Chemistry",
        gpa: 3.6,
        year: "Junior",
        email: "eva.wilson@example.com"
    }
];

document.write("<table border>");
document.write("<tr><th>ID</th>");
document.write("<th>Name</th>");
document.write("<th>Age</th>");
document.write("<th>Major Subject</th>");
document.write("<th>GPA</th>");
document.write("<th>Year</th>");
document.write("<th>E-Mail</th></tr>");

for (let i = 0; i < students.length; i++) {
    document.write("<tr>");
    document.write("<td>" + students[i].id + "</td>");
    document.write("<td>" + students[i].name + "</td>");
    document.write("<td>" + students[i].age + "</td>");
    document.write("<td>" + students[i].major + "</td>");
    document.write("<td>" + students[i].gpa + "</td>");
    document.write("<td>" + students[i].year + "</td>");
    document.write("<td>" + students[i].email + "</td>");
    document.write("</tr>");
}

console.log(students);