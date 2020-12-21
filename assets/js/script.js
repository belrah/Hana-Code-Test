/*Question No 2*/

//example of declaing global variables
var value = 50; //global variable  
function a() {
    alert(value);
}

function b() {
    alert(value);
}



/*Question No 3*/
// Different ways of Form Submission

//form submission by id
document.getElementById("form_id").submit();

//form submission by class
var x = document.getElementsByClassName("form_class");
x[0].submit();

//form submission by name
var x = document.getElementsByName('form_name');
x[0].submit();

//form submission by tag
var x = document.getElementsByTagName("form");
x[0].submit();



/*Question No 4*/
/*example of javascript Delete operator*/
//example 1
const Employee = {
    firstname: 'Mercy',
    lastname: 'Kalu'
};
console.log(Employee.firstname); // expected output: "Mercy"


//example 2
const car = {
    model: 'Fiesta',
    color: 'green'
}
delete car.model;

// it can also reference the property/method using the brackets syntax:
delete car['color']