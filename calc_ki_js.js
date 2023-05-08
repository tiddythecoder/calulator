
// DEFINE (write in copy) EACH AND EVERY TERM IN THIS JS PROGRAM 



let string = ""; // this string variable is for display content 

// below typed line : agar humme only one element select krna hai toh :""" document.getElementbyid ya class""" ,,,,,but to select multiple elements with the same class we use """document.query.SelectorAll(".class ka name")"""
let buttons = document.querySelectorAll('.btn')

// jo no. click kro usse display pe show krna hai kaise 
//  *** arrow function pdo bc ***
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e) => {
        // if "=" is clicked ,then calculate
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        // if "AC" is clicked then delete all
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value =string;
        }
        // if "numbers " are clicked
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
}) 