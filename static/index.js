// const { render, renderFile } = require("pug");

let number = document.getElementById("number").value;
let email = document.getElementById("email").value;
let gender = document.getElementById("gender").value;
let age = document.getElementById("age").value;
let name = document.getElementById("name").value;

function fun(){
    if(name==null || number==null  || email==null || gender== null|| age==null){
        alert("please enter all the blanks");

    }
    else{
        alert("Thank you we will contact you soon");
    }
}
