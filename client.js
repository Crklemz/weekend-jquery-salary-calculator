console.log('js');

const employees = [];


$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    

    //click listeners
    $('#submit').on('click', addEmployee);


}


function addEmployee() {
    console.log('submit button clicked');

    
    //take in values from inputs
    //create objects with the values
    //getter
    const employee = {
        firstName : $('.fnameIn').val(),
        lastName : $('.lnameIn').val(),
        idNum : $('.idNumIn').val(),
        title : $('.titleIn').val(),
        salary : $('.salaryIn').val()
    }

    //clearer
    
    $('.fnameIn').val('');
    $('.lnameIn').val('');
    $('.idNumIn').val('');
    $('.titleIn').val('');
    $('.salaryIn').val('');

    
    console.log('in addEmployee, printing employee', employee);

    //push objects into employee array
    employees.push(employee);
    console.log('in addEmployee, printing employees array after employee push', employees);
    
    //print employees array onto DOM***
    //add row to table on click for employee to be printed on in the DOM
    $('.employeeTable').append(`
    <tr class="employeeRow">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNum}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td></td>        
    </tr>
    `)

    //connect employee properties to table with matching class

    // $('.firstT').text(`${employee.firstName}`);
    // $('.lastT').text(`${employee.lastName}`);
    // $('.idT').text(`${employee.idNum}`);
    // $('.titleT').text(`${employee.title}`);
    // $('.salaryT').text(`${employee.salary}`);

    //loop through array and print on DOM in table



}





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
