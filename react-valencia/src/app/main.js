


const changeDate = (arrayDate) => {

       let changeDate = new Date(arrayDate).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);
       let strDateMonth = changeDate.split(" ");
       let currentDate = changeDate.replace(strDateMonth[1], strDateMonth[1] + ",");

       return(currentDate)

}

export{
    changeDate
}