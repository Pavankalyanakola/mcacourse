const pdfs={
    "Discrete Mathematical Structures":"./pdfs/1st Semester/101-Discrete Mathematics Structure.pdf",
    "Object Oriented Programming in java":"./pdfs/1st Semester/102 Object oriented programming with JAVA.pdf",
    "Computer Organization":"./pdfs/1st Semester/103 Computer Organization.pdf",
    "Operating Systems":"./pdfs/1st Semester/104 OPERATING SYSTEM.pdf",
    "Accounting or Financial Management":"./pdfs/1st Semester/105A Accounting and Financial Management.pdf",
    "Software Lab I":[],
    "Object Oriented Programming lab":[],
    "Operating System Lab":[],
    "Computer Oriented Operations Research":'./pdfs/2nd Semester/201 Computer Oriented Operations Research.pdf',
    "Data Structures Using Java":'./pdfs/2nd Semester/202 Data Structures using Java.pdf',
    "Data Communication And Computer Networks":'./pdfs/2nd Semester/203 Data Communication and Computer Networks.pdf',
    "Advanced Database Management Systems":'./pdfs/2nd Semester/204 Advanced database management system.pdf',
    "A. E-Commerce":'./pdfs/2nd Semester/205A  E-Commerce.pdf',
    "B. Cyber Security":'./pdfs/2nd Semester/205B Cyber Security.pdf',
    "C. Neural Networks":'./pdfs/2nd Semester/205C  Neural Networks.pdf',
    "Software Lab II":'',
    "Data Structures Lab":'',
    "Advanced Database Management Systems Lab":'',
    "Software Engineering":'./pdfs/3rd Semester/301 SOFTWARE ENGINEERING.pdf',
    "Computer Graphics":'./pdfs/3rd Semester/302-COMPUTER GRAPHICS.pdf',
    "Web Technologies":'./pdfs/3rd Semester/303 Web Technologies.pdf',
    "A. Data Warehouse and Data Mining":'./pdfs/3rd Semester/304A Datawarehousing and Dataminig.pdf',
    "B. Data Analytics":'./pdfs/3rd Semester/304B Big Data Analytics.pdf',
    "C. System Programming":'./pdfs/3rd Semester/304C System Programming.pdf',
    "A. Cryptography and Network Security":'./pdfs/3rd Semester/305A Cryptography and Network Seurity.pdf',
    "B. Artificial Intelligence":'./pdfs/3rd Semester/305B Artificial intellegence.pdf',
    "C. Moblie Application Development":'./pdfs/3rd Semester/305C Mobile Application Development.pdf',
    "Open Elective":'',
    "Software Lab III":'',
    "Web Technologies Lab":'',
    "A. Cloud Computing":'./pdfs/4rth Semester/401A Cloud Computing.pdf',
    "B. Dot Net Technologies":'./pdfs/4rth Semester/401B-DOT NET TECHNOLOGIES.pdf',
    "C. Software Testing":'./pdfs/4rth Semester/401C-Software Testing.pdf',
    "A. Essentials of Data Science":'',
    "B. Deep Learning":'./pdfs/4rth Semester/402B Deep Learning.pdf',
    "C. Internet of Things":'./pdfs/4rth Semester/402C Internet Of Things.pdf'
}



const pdfEl = document.getElementById('pdf');
const subject = localStorage.getItem('subject');
const unit = localStorage.getItem('unit');

pdfEl.src=pdfs[subject]
