console.log('js');

$(document).ready(readyNow);

let employees = [];


function readyNow(){
    console.log('JQ');
    

    //click listeners
    $('#submit').on('click', addEmployee);


}


function addEmployee() {
    console.log('submit button clicked');
    
    //take in values from inputs
    //create objects with the values
    let employeeObject = {
        firstName : $('fname').val(),
        //lastName : 
    }
    console.log(employeeObject);
    
    //push objects into employee array
    employees.push(employeeObject);
}

console.log(employees);

//The application should have an input form that collects
//employee first name, last name, ID number, job title, annual salary

//A 'Submit' button should collect the form information, store the information to 
//calculate monthly costs, append information to the DOM and clear the input fields. 



//take in the value and store as object in an array

//print array of objects onto the DOM

//if statement checking if mothly is > 20k --> if so, addClass to change background color to red


//add all salaries in the array and divide them by 12 to get monthly cost --> append

//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

//Create a delete button that removes an employee from the DOM. 
//For Base mode, it does **not** need to remove that Employee's salary from the reported total.
