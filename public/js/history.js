const januaryBtn = document.querySelector("#january-btn");
const februaryBtn = document.querySelector("#february-btn");
const marchBtn = document.querySelector("#march-btn");
const aprilBtn = document.querySelector("#april-btn");
const mayBtn = document.querySelector("#may-btn");
const juneBtn = document.querySelector("#june-btn");
const julyBtn = document.querySelector("#july-btn");
const augustBtn = document.querySelector("#august-btn");
const septemberBtn = document.querySelector("#september-btn");
const octoberBtn = document.querySelector("#october-btn");
const novemberBtn = document.querySelector("#november-btn");
const decemberBtn = document.querySelector("#december-btn");
const header = document.querySelector("#header");
const histories = document.querySelector(".histories");
const backBtn = document.querySelector("#back-btn");
const monthDisplay = document.querySelector("#month-display");
const dayRecords = document.querySelector("#day-records");
const yearInput = document.querySelector("#year-input");
const monthDisplayBtn = document.querySelectorAll(".day-class");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const day4 = document.querySelector("#day4");
const day5 = document.querySelector("#day5");
const day6 = document.querySelector("#day6");
const day7 = document.querySelector("#day7");
const day8 = document.querySelector("#day8");
const day9 = document.querySelector("#day9");
const day10 = document.querySelector("#day10");
const day11 = document.querySelector("#day11");
const day12 = document.querySelector("#day12");
const day13 = document.querySelector("#day13");
const day14 = document.querySelector("#day14");
const day15 = document.querySelector("#day15");
const day16 = document.querySelector("#day16");
const day17 = document.querySelector("#day17");
const day18 = document.querySelector("#day18");
const day19 = document.querySelector("#day19");
const day20 = document.querySelector("#day20");
const day21 = document.querySelector("#day21");
const day22 = document.querySelector("#day22");
const day23 = document.querySelector("#day23");
const day24 = document.querySelector("#day24");
const day25 = document.querySelector("#day25");
const day26 = document.querySelector("#day26");
const day27 = document.querySelector("#day27");
const day28 = document.querySelector("#day28");
const day29 = document.querySelector("#day29");
const day30 = document.querySelector("#day30");
const day31 = document.querySelector("#day31");
let getYear = "";
let getMonth = "";

document.addEventListener("DOMContentLoaded", (event) =>{
    januaryBtn.addEventListener("click", () => {
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "1";
            displayDays("JANUARY");
        } else {
            alert("PUT A YEAR")
        }
    });
    februaryBtn.addEventListener("click", () => {
        if (yearInput.value){
            day31.style = "display: none";
            day30.style = "display: none";
            getYear = yearInput.value;
            getMonth = "2";
            displayDays("FEBRUARY");
        } else {
            alert("PUT A YEAR")
        }
    });
    marchBtn.addEventListener("click", () => {
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "3";
            displayDays("MARCH");
        } else {
            alert("PUT A YEAR")
        }
    });
    aprilBtn.addEventListener("click", () => {
        if (yearInput.value){
            day31.style = "display: none";
            getYear = yearInput.value;
            getMonth = "4";
            displayDays("APRIL");
        } else {
            alert("PUT A YEAR")
        }
    });
    mayBtn.addEventListener("click", () => {
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "5";
            displayDays("MAY");
        } else {
            alert("PUT A YEAR")
        }
    });
    juneBtn.addEventListener("click", () => {
        if (yearInput.value){
            day31.style = "display: none";
            getYear = yearInput.value;
            getMonth = "6";
            displayDays("JUNE");
        } else {
            alert("PUT A YEAR")
        }
    });
    julyBtn.addEventListener("click", () => {
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "7";
            displayDays("JULY");
        } else {
            alert("PUT A YEAR")
        }
    });
    augustBtn.addEventListener("click", () => { 
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "8";
            displayDays("AUGUST");
        } else {
            alert("PUT A YEAR")
        }
    });
    septemberBtn.addEventListener("click", () => {
        if (yearInput.value){
            day31.style = "display: none";
            getYear = yearInput.value;
            getMonth = "9";
            displayDays("SEPTEMBER");
        } else {
            alert("PUT A YEAR")
        }
    });
    octoberBtn.addEventListener("click", () => { 
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "10";
            displayDays("OCTOBER");
        } else {
            alert("PUT A YEAR")
        }
    });
    novemberBtn.addEventListener("click", () => { 
        if (yearInput.value){
            day31.style = "display: none";
            getYear = yearInput.value;
            getMonth = "11";
            displayDays("NOVEMBER");
        } else {
            alert("PUT A YEAR")
        }
    });
    decemberBtn.addEventListener("click",() => {
        if (yearInput.value){
            getYear = yearInput.value;
            getMonth = "12";
            displayDays("DECEMBER");
        } else {
            alert("PUT A YEAR")
        }
    });
    backBtn.addEventListener("click", () => {
        day30.style = "display: inline";
        day31.style = "display: inline";
        getYear = "";
        getMonth = "";
        yearInput.value = "";
        yearInput.focus();
        removeAllBtnColor();
        removeElements();
        displayMonths();
    })
    day1.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day1);
        day_1(getYear, getMonth);
    })
    day2.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day2);
        day_2(getYear, getMonth);
    })
    day3.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day3);
        day_3(getYear, getMonth);
    })
    day4.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day4);
        day_4(getYear, getMonth);
    })
    day5.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day5);
        day_5(getYear, getMonth);
    })
    day6.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day6);
        day_6(getYear, getMonth);
    })
    day7.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day7);
        day_7(getYear, getMonth);
    })
    day8.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day8);
        day_8(getYear, getMonth);
    })
    day9.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day9);
        day_9(getYear, getMonth);
    })
    day10.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day10);
        day_10(getYear, getMonth);
    })
    day11.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day11);
        day_11(getYear, getMonth);
    })
    day12.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day12);
        day_12(getYear, getMonth);
    })
    day13.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day13);
        day_13(getYear, getMonth);
    })
    day14.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements()
        setColorOnClickBtn(day14);
        day_14(getYear, getMonth);
    })
    day15.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day15);
        day_15(getYear, getMonth);
    })
    day16.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day16);
        day_16(getYear, getMonth);
    })
    day17.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day17);
        day_17(getYear, getMonth);
    })
    day18.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day18);
        day_18(getYear, getMonth);
    })
    day19.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day19);
        day_19(getYear, getMonth);
    })
    day20.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day20);
        day_20(getYear, getMonth);
    })
    day21.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day21);
        day_21(getYear, getMonth);
    })
    day22.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day22);
        day_22(getYear, getMonth);
    })
    day23.addEventListener("click", () => {
        removeAllBtnColor();
        removeElements();
        setColorOnClickBtn(day23);
        day_23(getYear, getMonth);
    })
    day24.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day24);
        day_24(getYear, getMonth);
    })
    day25.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day25);
        day_25(getYear, getMonth);
    })
    day26.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day26);
        day_26(getYear, getMonth);
    })
    day27.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day27);
        day_27(getYear, getMonth);
    })
    day28.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day28);
        day_28(getYear, getMonth);
    })
    day29.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day29);
        day_29(getYear, getMonth);
    })
    day30.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day30);
        day_30(getYear, getMonth);
    })
    day31.addEventListener("click", () => {
        removeAllBtnColor()
        removeElements();
        setColorOnClickBtn(day31);
        day_31(getYear, getMonth);
    })
})
function removeElements(){
    const elements = document.querySelectorAll(".employee-row");
    for(let i = 0; i < elements.length; i++){
        elements[i].remove()
    }
}
function removeAllBtnColor(){
    // for(let i = 0; i < monthDisplayBtn.length; i++){
    //     monthDisplayBtn[i].style = "background-color: white";
    // }
}
function setColorOnClickBtn(element){
    // element.style = "background-color: cadetblue";
}
function displayMonths(){
    header.textContent = "HISTORY";
    histories.style = "display: grid";
    monthDisplay.style = "display: none";
    backBtn.style = "display: none";
    dayRecords.style ="display: none";
}

function displayDays(month){
    header.textContent = month;
    histories.style = "display: none";
    monthDisplay.style = "display: grid";
    backBtn.style = "display: inline";
    dayRecords.style ="display: block";
}

function getDayData(years, months, days){
    const year = years;
    const month = months;
    const day = days;
    const formData = { year, month, day}
    fetch("http://localhost:5500/api/history",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json"}
    }).then(res => res.json()).then(data => {
        if (data.length > 0){
            let html = "";
            data.forEach(element => {
                html += `
                <div class="employee-row">
                    <span>${element.last_name}, ${element.first_name} ${element.middle_name[0]}.</span>
                    <span>${element.work}</span>
                    <span>${element.currentDate}</span>
                    <span>${element.plate_number}</span>
                    <span>${element.time_in}</span>
                    <span>${element.time_out}</span>
                </div>`
            })
            dayRecords.innerHTML += html;
        } else {
            alert("No record of History");
        }
    })
}

function day_1(years, months){
    getDayData(years, months, 1)
}
function day_2(years, months){
    getDayData(years, months, 2)
}
function day_3(years, months){
    getDayData(years, months, 3)
}
function day_4(years, months){
    getDayData(years, months, 4)
}
function day_5(years, months){
    getDayData(years, months, 5)
}
function day_6(years, months){
    getDayData(years, months, 6)
}
function day_7(years, months){
    getDayData(years, months, 7)
}
function day_8(years, months){
    getDayData(years, months, 8)
}
function day_9(years, months){
    getDayData(years, months, 9)
}
function day_10(years, months){
    getDayData(years, months, 10)
}
function day_11(years, months){
    getDayData(years, months, 11)
}
function day_12(years, months){
    getDayData(years, months, 12)
}
function day_13(years, months){
    getDayData(years, months, 13)
}
function day_14(years, months){
    getDayData(years, months, 14)
}
function day_15(years, months){
    getDayData(years, months, 15)
}
function day_16(years, months){
    getDayData(years, months, 16)
}
function day_17(years, months){
    getDayData(years, months, 17)
}
function day_18(years, months){
    getDayData(years, months, 18)
}
function day_19(years, months){
    getDayData(years, months, 19)
}
function day_20(years, months){
    getDayData(years, months, 20)
}
function day_21(years, months){
    getDayData(years, months, 21)
}
function day_22(years, months){
    getDayData(years, months, 22)
}
function day_23(years, months){
    getDayData(years, months, 23)
}
function day_24(years, months){
    getDayData(years, months, 24)
}
function day_25(years, months){
    getDayData(years, months, 25)
}
function day_26(years, months){
    getDayData(years, months, 26)
}
function day_27(years, months){
    getDayData(years, months, 27)
}
function day_28(years, months){
    getDayData(years, months, 28)
}
function day_29(years, months){
    getDayData(years, months, 29)
}
function day_30(years, months){
    getDayData(years, months, 30)
}
function day_31(years, months){
    getDayData(years, months, 31)
}