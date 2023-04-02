const semesters=["I semester",
"II semester",
"III semester",
"IV semester"
]

const semestersContainer = document.getElementById('semesters-container');

for(let i of semesters){
    const link =`<a class="link"  href="./subjects.html"><h1 class="semesters-card" onclick="clickedCard(event)">${i}</h1></a>`
    semestersContainer.innerHTML+=link
}

function clickedCard(event){
    localStorage.setItem('semester',event.target.innerText)
    
}