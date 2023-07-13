export const convertDate = (str) => {
  str = str.toString();
  let parts = str.split(" ");
  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return parts[3] + "/" + months[parts[1]] + "/" + parts[2];
};
export const convertDateIntoPickerFormat = (date) => {
  if(date.includes("T")){
    date=date.split("T")[0];
  }
  if (date) {
    const Dates = date.split("-");
    return new Date(`${Dates[1]}-${Dates[2]}-${Dates[0]}`);
  } else {
    return date;
  }
};

export const checkDate2 = (date) => {
  date = date.toString();
  let parts = date.split("-");
  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  let temp = parts[0] + "-" + months[parts[1]] + "-" + parts[2];
  const moment = require('moment');

  const dateFormat= "DD-MM-YYYY"
  return moment(temp, dateFormat).isValid()
};

export const checkDate = (date) => {
  const moment = require('moment');
  const dateFormat= "DD-MM-YYYY"
  return moment(date, dateFormat).isValid()
};

export const dateDiffInDays = (a, b) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
export const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return new Date(today);
};

export const convertDate2 = (date) =>{
  if(date == "") return "-";
  const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const [year, mon, day] = date.includes("/") ? date.split("/")  : date.split("-")
  return `${day}-${month[mon-1]}-${year}`;
}

export const convertDate3 = (date) =>{
  if(date == "") return "-";
  const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const [year, mon, day] = date.split("/")
  return `${day}-${month[mon-1]}-${year}`;
}

export const isEmpty = (data) =>{
  if(data == "") return "-";
  return data;
}

export const statusChecking = (data) =>{
  let statusClass = "";
  let statusText = "";
  if(data == "1"){
    statusClass = "complete";
    statusText = "Complete";
  }else if(data.toLowerCase()  === "complete"){
    statusClass = "complete";
    statusText = "Complete";
  }else{
    statusClass = "pending";
    statusText = "Pending";
  }


  return ([statusClass, statusText]);
}
