const express = require("express");
const mysql = require("mysql");
const path = require("path");
const { toCSVFiles } = require("./toCSVFileData.js");
const DATE = new Date();
const PORT = 5500;
const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vehicle_monitoring",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("DATABASE CONNECTED");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "public");

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/setting", (req, res) => {
  res.render("setting", { title: "Setting" });
});

app.get("/report", (req, res) => {
  res.render("report", { title: "Report" });
});

app.get("/history", (req, res) => {
  res.render("history", { title: "History" });
});

//API show employees
app.get("/api/employee", async (req, res) => {
  connection.query("SELECT * FROM registered_persons", (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

//API show data of each employee
app.get("/api/employee/:id", async (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM registered_persons JOIN vehicle ON person_id = owner_id WHERE person_id = '${id}'`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

//API insert employee
app.post("/api/employee", async (req, res) => {
  const id = req.body.id;
  const lname = req.body.lname;
  const fname = req.body.fname;
  const mname = req.body.mname;
  const gender = req.body.gender;
  const address = req.body.address;
  const contact = req.body.contact;
  const email = req.body.email;
  const work = req.body.work;
  const department = req.body.department;
  const school = req.body.school;
  const vehicleType = req.body.vehicleType;
  const plateNum = req.body.plateNum;

  connection.query(
    `INSERT INTO registered_persons (person_id, first_name, last_name, middle_name, address, gender, work, school, department, email, contact_number) VALUES ('${id}', '${fname}', '${lname}', '${mname}', '${address}', '${gender}', '${work}', '${school}', '${department}', '${email}', '${contact}')`,
    (err, rows, fields) => {
      if (err) throw err;
    }
  );
  if (vehicleType && plateNum) {
    connection.query(
      `INSERT INTO vehicle (owner_id, type, plate_number, date_register, date_expiry) VALUES ('${id}', '${vehicleType}', '${plateNum}', '${`${DATE.getFullYear()}-${DATE.getMonth() + 1}-${DATE.getDate()}`}', '${`${DATE.getFullYear() + 1
      }-${DATE.getMonth() + 1}-${DATE.getDate()}`}')`,
      (err, rows, fields) => {
        if (err) throw err;
        res.json({
        });
      }
    );
  }
});

//API update employee info
app.put("/api/employee", async (req, res) => {
  const id = req.body.id;
  const lname = req.body.lname;
  const fname = req.body.fname;
  const mname = req.body.mname;
  const gender = req.body.gender;
  const address = req.body.address;
  const contact = req.body.contact;
  const email = req.body.email;
  const work = req.body.work;
  const department = req.body.department;
  const school = req.body.school;

  connection.query(
    `UPDATE registered_persons SET first_name='${fname}', last_name='${lname}', middle_name='${mname}', address='${address}', gender='${gender}', work='${work}', school='${school}', department='${department}', email='${email}', contact_number='${contact}' WHERE person_id = '${id}'`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ msg: "updated the employee info" });
    }
  );
});

//API delete employee
app.delete("/api/employee", async (req, res) => {
  const id = req.body.id;
  connection.query(
    `DELETE FROM registered_persons WHERE person_id = '${id}'`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json({ msg: "employee deleted" });
    }
  );
});

//API logged_in employee
app.post("/api/login", async (req, res) => {
  const id = req.body.employeeId;
  const time_in = req.body.time_in;
  const time_out = req.body.time_out;
  const date = req.body.dates;
  connection.query(
    `INSERT INTO logged (person_id, time_in, time_out, currentDate)
    VALUES ('${id}', '${time_in}', '${time_out}', '${date}')`,
    (err, rows, fields) => {
      if (err) throw err;
    }
  );
});

//API logged_out employee
app.put("/api/logout", async (req, res) => {
  const logged_id = req.body.logged_id;
  const id = req.body.employee_id;
  const time_in = req.body.time_in;
  const time_out = req.body.time_out;
  const date = req.body.dates;

  connection.query(
    `UPDATE logged SET logged_id = '${logged_id}', person_id = '${id}', time_in = '${time_in}', time_out = '${time_out}', currentDate = '${date}' WHERE logged_id = '${logged_id}' AND person_id = '${id}' AND currentDate = '${date}'`,
    (err, rows, fields) => {
      if (err) throw err;
    }
  );
});

// API logged info employee by id
app.get("/api/logged/:id", async (req, res) => {
  const id = req.params.id;
  const date = `${DATE.getFullYear()}/${DATE.getMonth() + 1}/${DATE.getDate()}`;
  connection.query(
    `SELECT * FROM logged WHERE person_id = '${id}' AND currentDate = '${date}' AND time_out = 'null'`,
    (err, rows, fields) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.post("/api/history", async (req, res) => {
  const { year, month, day } = req.body;
  connection.query(`SELECT * FROM registered_persons JOIN logged JOIN vehicle WHERE registered_persons.person_id = logged.person_id AND registered_persons.person_id = owner_id AND currentDate LIKE '${year}/%' AND currentDate LIKE '%/${month}/%' AND currentDate LIKE '%/${day}'`, (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.get("/api/toCSVFile", (req, res) => {
  let date = req.query.newInput;
  let filename = req.query.newFilename;
  connection.query(`SELECT * FROM registered_persons JOIN logged WHERE registered_persons.person_id = logged.person_id AND currentDate = '${date}'`, (err, rows, fields) => {
    if (err) throw err;
    toCSVFiles(JSON.stringify(rows), filename);
  })

})

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNNING IN PORT ${PORT}...`);
});
