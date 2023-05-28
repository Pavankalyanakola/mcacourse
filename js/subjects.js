const subjects={
    "I semester":["Discrete Mathematical Structures",
       " Object Oriented Programming in java",
        "Computer Organization",
        "Operating Systems",
        "Accounting or Financial Management",
       
    ],
    "II semester":[
        "Computer Oriented Operations Research",
        "Data Structures Using Java",
        "Data Communication And Computer Networks",
        "Advanced Database Management Systems",
        "A. E-Commerce","B. Cyber Security","C. Neural Networks",
       
    ],
    "III semester":[
        "Software Engineering",
        "Computer Graphics",
        "Web Technologies",
        "A. Data Warehouse and Data Mining"," B. Data Analytics","C. System Programming",
        "A. Cryptography and Network Security","B. Artificial Intelligence","C. Moblie Application Development",
        
    ],
    "IV semester":[
        "A. Cloud Computing","B. Dot Net Technologies","C. Software Testing",
        "A. Essentials of Data Science","B. Deep Learning","C. Internet of Things"
    ]
};

const subjectContainer = document.getElementById('subjects-container');
const semester = localStorage.getItem('semester');
const semesterName = document.getElementById('semester-name');
semesterName.innerHTML=semester

for(let i of subjects[semester]){
   const h1 = `<a href="./pdf.html"><h1 class="subject-card" onclick="clickedCard(event)" >${i}</h1></a>`
   subjectContainer.innerHTML+=h1
}
function clickedCard(event){
    console.log('subjects');
    localStorage.setItem('subject',event.target.innerText)
    
}
