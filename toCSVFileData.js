const { spawn } = require("child_process");

function toCSVFiles(Database, filename){
    fromDatabase = JSON.parse(Database);
    let personalData = [];

    for (let i = 0; i < fromDatabase.length; i++){
        personalData.push([fromDatabase[i].person_id, fromDatabase[i].first_name, fromDatabase[i].last_name, fromDatabase[i].middle_name, fromDatabase[i].address, fromDatabase[i].gender, fromDatabase[i].work, fromDatabase[i].school, fromDatabase[i].department, fromDatabase[i].email, fromDatabase[i].contact_number, fromDatabase[i].time_in, fromDatabase[i].time_out, fromDatabase[i].currentDate]);
      }

    const childPython = spawn("python", ["toCSVFile.py", personalData, filename]);
    
    childPython.stdout.on("data", data => {
        newData = String(data);
        console.log(newData);
    });
}

// toCSVFiles(ultrahigh)

module.exports = {toCSVFiles};


