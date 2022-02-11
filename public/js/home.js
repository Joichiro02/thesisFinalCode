const DATE = new Date();
const rfidInput = document.querySelector("#rfid-input");
const loginBtn = document.querySelector("#rfid-btn");
const clearBtn = document.querySelector("#clear-btn");
const closeBtn = document.querySelector(".close-btn");
const driverInfo = document.querySelector(".driver-info");
// const fromDatabaseBtn = document.querySelector("#fromDatabase-btn");

window.addEventListener("load", () => {
  reloadDisplay();
});

//EVENTS
rfidInput.focus();
clearBtn.addEventListener("dblclick", clear);
closeBtn.addEventListener("click", close);
// fromDatabaseBtn.addEventListener("dblclick", fromDatabase);
rfidInput.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    let loggedOut = true;
    if (localStorage.length === 0) {
      getDriverInfo();
      // event.preventDefault();
      location.reload();
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == String(rfidInput.value)) {
          loggedOut = false;
          employees_logged(rfidInput.value);
          localStorage.removeItem(String(rfidInput.value))
          location.reload();
        }
      }
      if (loggedOut) {
        getDriverInfo();
        // event.preventDefault();
        location.reload();
      }
    }
  }
});
loginBtn.addEventListener("click", function (event) {
  let loggedOut = true;
  if (localStorage.length === 0) {
    getDriverInfo();
    // event.preventDefault();
    location.reload();
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) == String(rfidInput.value)) {
        loggedOut = false;
        employees_logged(rfidInput.value);
        localStorage.removeItem(String(rfidInput.value))
        location.reload();
      }
    }
    if (loggedOut) {
      getDriverInfo();
      location.reload();
      // event.preventDefault();
    }
  }
});

//FUNCTIONS
function reloadDisplay() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const data = JSON.parse(value);
    const tableBody = document.querySelector("#table-body");
    const tableBodyRow = document.createElement("div");
    const removeBtn = document.createElement("button");
    const infoBtn = document.createElement("button");
    const spanName = document.createElement("span");
    const spanWork = document.createElement("span");
    const spanPlate = document.createElement("span");
    const spanTime = document.createElement("span");
    const spanDate = document.createElement("span");
    tableBodyRow.classList.add("table-body-row");
    removeBtn.classList.add("remove-btn");
    infoBtn.classList.add("info-btn");
    removeBtn.textContent = "remove";

    removeBtn.id = key;
    infoBtn.innerHTML = '<i class="fa fa-info-circle" aria-hidden="true"></i>';

    removeBtn.setAttribute("onclick", `remove('${key}')`);
    infoBtn.setAttribute("onclick", `info('${key}')`);
    spanName.textContent = data.infos[0];
    spanWork.textContent = data.infos[1];
    spanPlate.textContent = data.infos[2];
    spanTime.textContent = data.infos[3];
    spanDate.textContent = data.infos[4];

    tableBody.appendChild(tableBodyRow);
    tableBodyRow.appendChild(removeBtn);
    tableBodyRow.appendChild(infoBtn);
    tableBodyRow.appendChild(spanName);
    tableBodyRow.appendChild(spanWork);
    tableBodyRow.appendChild(spanPlate);
    tableBodyRow.appendChild(spanTime);
    tableBodyRow.appendChild(spanDate);
  }
}

function getDriverInfo() {
  const id = rfidInput.value;
  fetch(`${window.origin}/api/employee/${id}`)
    .then((res) => res.json())
    .then((data) => {
      employee_logged_in(data[0].person_id)
      const tableBody = document.querySelector("#table-body");
      const tableBodyRow = document.createElement("div");
      const removeBtn = document.createElement("button");
      const infoBtn = document.createElement("button");
      const spanName = document.createElement("span");
      const spanWork = document.createElement("span");
      const spanPlate = document.createElement("span");
      const spanTime = document.createElement("span");
      const spanDate = document.createElement("span");
      tableBodyRow.classList.add("table-body-row");
      removeBtn.classList.add("remove-btn");
      infoBtn.classList.add("info-btn");
      removeBtn.textContent = "remove"

      data.forEach((element) => {
        removeBtn.id = element.person_id;
        infoBtn.innerHTML =
          '<i class="fa fa-info-circle" aria-hidden="true"></i>';
        const fullName = `${element.last_name}, ${element.first_name} ${element.middle_name[0]}.`;
        removeBtn.setAttribute("onclick", `remove('${element.person_id}')`);
        infoBtn.setAttribute("onclick", `info('${element.person_id}')`);
        spanName.textContent = fullName;
        spanWork.textContent = element.work;
        spanPlate.textContent = element.plate_number;
        spanTime.textContent = `${addZero(DATE.getHours()%12)}:${addZero(DATE.getMinutes())}`;
        spanDate.textContent = `${DATE.getFullYear()}/${DATE.getMonth()+1}/${DATE.getDay()}`;
      });
      tableBody.appendChild(tableBodyRow);
      tableBodyRow.appendChild(removeBtn);
      tableBodyRow.appendChild(infoBtn);
      tableBodyRow.appendChild(spanName);
      tableBodyRow.appendChild(spanWork);
      tableBodyRow.appendChild(spanPlate);
      tableBodyRow.appendChild(spanTime);
      tableBodyRow.appendChild(spanDate);

      const fullName = `${data[0].last_name}, ${data[0].first_name} ${data[0].middle_name[0]}.`;
      const key = data[0].person_id;
      const value = {};
      value.infos = [
        fullName,
        data[0].work,
        data[0].plate_number,
        `${addZero(DATE.getHours()%12)}:${addZero(DATE.getMinutes())}`,
        `${DATE.getFullYear()}/${DATE.getMonth()+1}/${DATE.getDay()}`,
      ];
      localStorage.setItem(String(key), JSON.stringify(value));
      rfidInput.value = "";
      rfidInput.focus();
    })
    .catch((err) => {
      alert("YOU ARE NOT REGISTERED IN DATABASE AS A DRIVER");
      rfidInput.value = "";
      rfidInput.focus();
    });
}

function remove(id) {
  const removeBtn = document.getElementById(id);
  localStorage.removeItem(String(id));
  removeBtn.parentElement.remove();
  location.reload();
}

function info(id) {
  driverInfo.style = "display: block";
  closeBtn.style = "display: inline";

  const datas = localStorage.getItem(String(id));
  const info = JSON.parse(datas);

  document.querySelector(".driver-info-name").textContent = info.infos[0];
  document.querySelector(".driver-info-work").textContent = info.infos[1];
  document.querySelector(".driver-info-plate").textContent = info.infos[2];
  document.querySelector(".driver-info-time").textContent = info.infos[3];
  document.querySelector(".driver-info-date").textContent = info.infos[4];
}

// function login(event) {
//   let login = true;
//   for (let i = 0; i < localStorage.length; i++) {
//     if (localStorage.key(i) == Number(rfidInput.value)) {
//       localStorage.removeItem(Number(rfidInput.value));
//       location.reload();
//       login = false;
//       break;
//     }
//   }
//   if (login) {
//     getDriverInfo();
//   }
//   event.preventDefault();
// }

function clear() {
  localStorage.clear();
  location.reload();
}

function close() {
  rfidInput.value = "";
  rfidInput.focus();
  driverInfo.style = "display: none";
  document.querySelector(".driver-info-name").textContent = "";
  document.querySelector(".driver-info-work").textContent = "";
  document.querySelector(".driver-info-plate").textContent = "";
  document.querySelector(".driver-info-time").textContent = "";
  document.querySelector(".driver-info-date").textContent = "";
}

async function employees_logged(id) {
  fetch(`${window.origin}/api/logged/${id}`)
    .then((res) => res.json())
    .then((data) => {
      employee_logged_out(data[0].logged_id, data[0].person_id, data[0].time_in, data[0].currentDate);
    }).catch(err => {
      // alert(err)
    })
}

function employee_logged_in(id) {
  const employeeId = id;
  const time_in = `${addZero(DATE.getHours()%12)}:${addZero(DATE.getMinutes())}:${addZero(DATE.getSeconds())}`;
  const time_out = "null";
  const dates = `${DATE.getFullYear()}/${DATE.getMonth()+1}/${DATE.getDay()}`;

  const formData = {
    employeeId,
    time_in,
    time_out,
    dates,
  };
  fetch(`${window.origin}/api/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  });
}

function employee_logged_out(id, employeeId, timeIn, currentDate) {
  const logged_id = id;
  const employee_id = employeeId;
  const time_in = timeIn;
  const time_out = `${addZero(DATE.getHours()%12)}:${addZero(DATE.getMinutes())}:${addZero(DATE.getSeconds())}`;
  const dates = currentDate;
  const formData = {
    logged_id,
    employee_id,
    time_in,
    time_out,
    dates,
  };
  fetch(`${window.origin}/api/logout`, {
    method: "PUT",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  });
}

// function fromDatabase(){
//   fetch(`${window.origin}/api/insertIdInArduino`);
// }

function addZero(num){
  return num < 10 ? `0${num}` : num;
}Y

