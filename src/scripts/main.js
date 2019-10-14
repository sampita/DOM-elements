console.log("You are capable and strong enough to do anything if you put your mind to it");

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

let articleContainer = document.querySelector("#container")
let studentComponent

const createStudentComponent = (name, subject, info, score) => {
        let studentComponent = ""
        if (score >= 60) {
            studentComponent = "xx-large passing"
        }

        else {studentComponent = "xx-large failing"}
      

    return `
        <div class="student">
            <h1 class="${studentComponent}">${name}</h1>
            <section class ="bordered dashed section--padded>${subject}</section>
            <aside class="pushRight">${info}</aside>
        </div>
    `
}

let student;

for (let i = 0; i < students.length; i++) {
    student = students[i]
    articleContainer.innerHTML += createStudentComponent(student.name, student.subject, student.info, student.score);
}
