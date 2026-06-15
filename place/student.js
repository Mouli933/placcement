let studentCount = 0;


function addStudent() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let course = document.getElementById('course').value;
    let marks = Number(document.getElementById('marks').value);


    if(name==='' || age==='' || course==='' || marks==='') {
        alert('Please fill all fields');
        return;
    }


    let card = document.createElement('div');
    card.classList.add('student-card');

let grade;

if(marks >= 90)
{
   grade = "A";
}
else if(marks >= 80)
{
   grade = "B";
}
else if(marks >= 70)
{
   grade = "C";
}
else if(marks >= 60)
{
   grade = "D";
}
else
{
   grade = "F";
}

    card.innerHTML = `
        <h3>${name}</h3>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
        <p>Marks: ${marks}</p>
        <p>Grade: ${grade}</p>
        <button class="delete-button">Delete</button>
    `;    

    // FIX 1: Make the delete button work when clicked
    let deleteButton = card.querySelector('.delete-button');    
    deleteButton.onclick = function() {
        card.remove();
        studentCount--; 
        document.getElementById("count").textContent = "Total Students : " + studentCount;
 
    };

    // FIX 2: Changed 'student-list' to match your HTML id 'studentList' exactly
    document.getElementById('studentList').appendChild(card);
     studentCount++;


    document.getElementById("count").textContent = "Total Students : " + studentCount;


    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('course').value = '';
    document.getElementById('marks').value = '';

}
