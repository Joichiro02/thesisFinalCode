const formMainBody = document.querySelector('#form-main-body');
const employeeBody = document.querySelector('#employee-body');
const registerBtn = document.querySelector('#register-btn');
const employeeBtn = document.querySelector('#employee-btn');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const tableBody = document.querySelector('#table-body');

window.addEventListener('load', () => {
    let html = '';
    formMainBody.style = 'display: block';
    employeeBody.style = `display: none`;
    registerBtn.style = 'background-color: #13db35';
    employeeBtn.style = 'background-color: #c2c2c2';
    fetch('http://localhost:5500/api/employee')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((element) => {
                const fullName = `${element.last_name}, ${element.first_name}`;
                html += `<div class='table-body-row'>               
                            <span><button class='info-btn' onclick='personData("${element.person_id}")'><i class="fa fa-info-circle" aria-hidden="true"></i></button>${fullName}</span>
                            <span>${element.address}</span>
                            <span>${element.work}</span>
                            <span>${element.school}</span>
                            <span>${element.email}</span>
                        </div>`;
            });
            tableBody.innerHTML = html;
        });
});

function personData(id){
    alert(id);
}


//EVENTS
document.querySelector('input').addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

registerBtn.addEventListener('click', () => {
    formMainBody.style = 'display: block';
    employeeBody.style = 'display: none';
    registerBtn.style = 'background-color: #c2c2c2';
    employeeBtn.style = 'background-color: #13db35';
});

employeeBtn.addEventListener('click', getAllEmployees);
submitBtn.addEventListener('click', insertEmployee);
cancelBtn.addEventListener('click', function (event) {
    location.reload();
});

//FUNTIONS
function insertEmployee() {
    let id = document.querySelector('#id-input').value;
    const lname = document.querySelector('#lastname-input').value;
    const fname = document.querySelector('#firstname-input').value;
    const mname = document.querySelector('#middlename-input').value;
    const gender = document.querySelector('#gender-input').value;
    const address = document.querySelector('#address-input').value;
    const contact = document.querySelector('#contact-input').value;
    const email = document.querySelector('#email-input').value;
    const work = document.querySelector('#work-input').value;
    const department = document.querySelector('#department-input').value;
    const school = document.querySelector('#school-input').value;
    const vehicleType = document.querySelector('#vehicle-type-input').value;
    const plateNum = document.querySelector('#plate-num-input').value;

    if (
        id &&
        lname &&
        fname &&
        mname &&
        gender &&
        address &&
        contact &&
        email &&
        work &&
        department &&
        school &&
        vehicleType &&
        plateNum
    ) {
        const formData = {
            id,
            lname,
            fname,
            mname,
            gender,
            address,
            contact,
            email,
            work,
            department,
            school,
            vehicleType,
            plateNum,
        };
        fetch('http://localhost:5500/api/employee', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
            },
        });
    } else {
        alert('SOMETHING MISSING');
    }
}

function getAllEmployees() {
    let html = '';
    formMainBody.style = 'display: none';
    employeeBody.style = `display: block`;
    registerBtn.style = 'background-color: #13db35';
    employeeBtn.style = 'background-color: #c2c2c2';
    fetch('http://localhost:5500/api/employee')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((element) => {
                const fullName = `${element.last_name}, ${element.first_name} ${element.middle_name}`;
                html += `<span>${element.person_id}</span>
                              <span>${fullName}</span>
                              <span>${element.work}</span>
                              <br>`;
            });
            column1.innerHTML = html;
        });
}
