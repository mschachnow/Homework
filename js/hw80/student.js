
'use strict';

class Student {
    constructor(firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    }
    print() {
        console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.grade}`);
    }
}
const s1 = new Student('Nechama', 'Stein', '13', '9th');
const s2 = new Student('Chaya', 'Kohn', '17', '12th');
const s3 = new Student('Gitty', 'Schwartz', '15', '11th');

const studentArray = [s1, s2, s3];

function printStudents(backwards, ...students) {

    students.forEach(eachStudent => {
        let { firstName: a, lastName: b, age, grade } = eachStudent;
        if (backwards) {
            [a, b] = [b, a];
        } else {
            console.log(`${eachStudent.firstName} ${eachStudent.lastName} ${eachStudent.age} ${eachStudent.grade}`);
        }
    });
}
printStudents(false, ...studentArray);
printStudents(true, ...studentArray);
//let [one, two, three] = studentArray;

function copy(theStudent) {
    const { firstName, lastName, ...rest } = theStudent;
    /*const newStudent = {
        firstName: lastName,
        lastName: firstName,
        ...rest
    };*/
    //return Object.assign(new Student(), newStudent);
    return Object.assign(new Student(lastName, firstName), rest);
}
const copyOf = copy(s2);
console.log(copyOf);
const copy2 = copy(s3);
console.log(copy2);

