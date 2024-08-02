//Array of objects (faculties)

const faculties = [
    {
        id: 1,
        name: "Dr. John Smith",
        department: "Computer Science",
        designation: "Professor",
        email: "john.smith@university.edu"
    },
    {
        id: 2,
        name: "Dr. Emily Johnson",
        department: "Mathematics",
        designation: "Associate Professor",
        email: "emily.johnson@university.edu"
    },
    {
        id: 3,
        name: "Dr. Michael Brown",
        department: "Physics",
        designation: "Assistant Professor",
        email: "michael.brown@university.edu"
    },
    {
        id: 4,
        name: "Dr. Sarah Davis",
        department: "Chemistry",
        designation: "Lecturer",
        email: "sarah.davis@university.edu"
    },
    {
        id: 5,
        name: "Dr. William Garcia",
        department: "Biology",
        designation: "Senior Lecturer",
        email: "william.garcia@university.edu"
    }
];

document.write("<table border>");
document.write("<tr><th>ID</th>");
document.write("<th>Name</th>");
document.write("<th>Department</th>");
document.write("<th>Designation</th>");
document.write("<th>E-Mail</th></tr>");

for (let i = 0; i < faculties.length; i++) {
    document.write("<tr>");
    document.write("<td>" + faculties[i].id + "</td>");
    document.write("<td>" + faculties[i].name + "</td>");
    document.write("<td>" + faculties[i].department + "</td>");
    document.write("<td>" + faculties[i].designation + "</td>");
    document.write("<td>" + faculties[i].email + "</td>");
    document.write("</tr>");
}

console.log(faculties);