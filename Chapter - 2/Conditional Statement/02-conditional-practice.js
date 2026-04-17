//Write a code which can give grades to students according to their scores:

// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let grades = Number(prompt("Enter student grades = "));
console.log(grades);

if (grades>=90 && grades<=100){
    console.log("Student Got 'A' Grade");
}
else if(grades>= 70 && grades<=89 ){
    console.log("Student Got 'B' Grade");
}

else if(grades>=60 && grades<=69){
    console.log("Student Got 'C' Grade");
}
else if (grades>=50 && grades<=59){
    console.log("Student Got 'D' Grade");
}
else {
    console.log("Student Got 'F' Grade");
}
