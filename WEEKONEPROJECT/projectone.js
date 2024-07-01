let prompt =require('prompt-sync')()
let input = prompt('enter marks ');

function Grades(marks) {
    if (marks ==="") {
        console.log("Enter Marks")
    }
    else if (marks<=100 && marks >=79) {
        console.log(`A`);
    }
    else if (marks<=78 && marks>=60){
        console.log(`B`);
    }
    else if (marks<=59 && marks>49){
        console.log(`C`);
    }
    else if (marks<48 && marks>=40){
        console.log(`D`);
    }
    else if (marks<39 && marks>=0)
        console.log(`E`);
}


console.log(speed(input));
