// DATABASE
let students = {
    "Gse_001": {
        name: "Abdurahman Tajudin",
        password: "1111",
        rank: "1",
        homework: "Math Exercise 1",
        results: [
            {subject: "Math", score: 90}
        ]
    }
};

// ADMIN & TEACHER LOGIN
const admin = { id: "admin", password: "3526" };
const teacher = { id: "teacher", password: "1234" };

// LOGIN FUNCTION
function login() {
    let id = document.getElementById("userID").value;
    let pass = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (role === "student") {
        if (students[id] && students[id].password === pass) {
            showStudent(id);
        } else {
            alert("Wrong student ID or password");
        }
    }

    if (role === "admin") {
        if (id === admin.id && pass === admin.password) {
            showAdmin();
        } else {
            alert("Wrong admin login");
        }
    }

    if (role === "teacher") {
        if (id === teacher.id && pass === teacher.password) {
            showAdmin();
        } else {
            alert("Wrong teacher login");
        }
    }
}

// SHOW STUDENT
function showStudent(id) {
    let student = students[id];

    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("studentPanel").classList.remove("hidden");

    document.getElementById("studentName").innerText = student.name;
    document.getElementById("rank").innerText = student.rank;
    document.getElementById("homework").innerText = student.homework;

    let body = document.getElementById("resultBody");
    body.innerHTML = "";

    student.results.forEach(r => {
        body.innerHTML += `<tr>
            <td>${r.subject}</td>
            <td>${r.score}</td>
        </tr>`;
    });
}

// SHOW ADMIN
function showAdmin() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
}

// ADD STUDENT
function addStudent() {
    let id = document.getElementById("newID").value;
    let name = document.getElementById("newName").value;
    let pass = document.getElementById("newPass").value;

    students[id] = {
        name: name,
        password: pass,
        rank: "-",
        homework: "-",
        results: []
    };

    alert("Student Added");
}

// ADD RESULT + RANK + HOMEWORK
function addResult() {
    let id = document.getElementById("newID").value;
    let subject = document.getElementById("subject").value;
    let score = document.getElementById("score").value;
    let rank = document.getElementById("rankInput").value;
    let hw = document.getElementById("homeworkInput").value;

    if (students[id]) {
        students[id].results.push({subject, score});
        students[id].rank = rank;
        students[id].homework = hw;

        alert("Updated Successfully");
    } else {
        alert("Student not found");
    }
}

// LOGOUT
function logout() {
    location.reload();
}