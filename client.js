console.log('js');

const employees = [];

let totalAnnual = 0;

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    

    //click listeners
    $('#submit').on('click', addEmployee);

    $('#submit').on('click', getMonthlyTotal);

    $('.employeeTable').on('click', '.deleteBtn', handleDelete);

}

function handleDelete() {
    console.log('clicked delete');
    $(this).closest('.employeeRow').remove();
    
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
        <td>$${formatNumber(employee.salary)}</td>
        <td><button class="deleteBtn">DELETE</button></td>        
    </tr>
    `)

}

function getMonthlyTotal() {
    console.log('in getMonthlyTotal');
    //gather all salaries in employees array and add them together
    let salaries = 0;
    for (let i=0; i < employees.length; i++) {
        salaries += Number(employees[i].salary);
    }//end for
    console.log('salaries variable', salaries);
    
    // divide annual amount by 12 to get monthly
    let monthlyCost = salaries / 12;

    console.log('monthlyCost', monthlyCost);
    
    //print to DOM and if over 20,000 - highlight

    $('#totalMonthly').text(`Total Monthly: $${formatNumber(monthlyCost.toFixed(2))}`)

    if(monthlyCost > 20000) {
        $('#totalMonthly').addClass('warning');
    }
}

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
