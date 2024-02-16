const date = new Date().toLocaleDateString('en-GB');
const [currentDay, currentMonth, currentYear] = date.split('/');

// console.log(date === "17/02/2024"); 
const examDates=document.getElementsByClassName("dates");
// console.log(examDates);
// let i = 0;
for (const dates of examDates) 
{
    const examDate =  dates.textContent;
    // console.log(Date(examDate));
    const [examDay, examMonth, examYear] = examDate.split('/');
    if(parseInt(currentDay) === parseInt(examDay) && parseInt(currentMonth) === parseInt(examMonth) && parseInt(currentYear) ===  parseInt(examYear) ){
        document.getElementById(examDate).classList.add("bg-green-400");
        document.getElementById(examDate).classList.add("text-white");

    }   
    else if (parseInt(currentDay) > parseInt(examDay) ){
        if(parseInt(currentMonth) >= parseInt(examMonth) ){
            if(parseInt(currentYear) >= parseInt(examYear)){
        document.getElementById(examDate).classList.add("bg-red-400");
        document.getElementById(examDate).classList.add("text-white");
                
            }

        }
        else{
            if(parseInt(currentYear) > parseInt(examYear)){
                document.getElementById(examDate).classList.add("bg-red-400");
        document.getElementById(examDate).classList.add("text-white");

            }
        }
    }
    else if (parseInt(currentDay) < parseInt(examDay) ){
        if(parseInt(currentMonth) > parseInt(examMonth)){
            if(parseInt(currentYear) >= parseInt(examYear)){
                document.getElementById(examDate).classList.add("bg-red-400");
        document.getElementById(examDate).classList.add("text-white");

            }

        }
        else {
            if(parseInt(currentYear) > parseInt(examYear)){
                document.getElementById(examDate).classList.add("bg-red-400");
        document.getElementById(examDate).classList.add("text-white");

            }
        }
    }
    else {
        document.getElementById(examDate).classList.add("bg-red-400","text-white");
        document.getElementById(examDate).classList.add("text-white");

    }
}
