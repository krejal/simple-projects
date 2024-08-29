//http://api.weatherapi.com/v1/current.json?key=48fb135d5d2a46418a790708240901&q=Mumbai&aqi=no

const tempField = document.querySelector(".temp");
const locField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_a");

const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);
let target = 'Bhopal';

const fetchResult = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=48fb135d5d2a46418a790708240901&q=${targetLocation}&aqi=no`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  let locationName = data.location.name;
  //console.log(locationName)
  let time = data.location.localtime;
  let temp = data.current.temp_c;
  let condition = data.current.condition.text;
  updateDetails(temp, locationName, time, condition);
}

function updateDetails(temp, locationName, time, condition) {
    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]
    let currentday = getDayName(new Date(splitDate).getDay())
  tempField.innerText = temp;
  locField.innerText = locationName;
  dateField.innerText =  `${splitDate} ${currentday} ${splitTime}`;
  conditionField.innerText = condition;
}

function searchForLocation(e) {
  e.preventDefault();
  target = searchField.value;
  fetchResult(target);
}

fetchResult(target);
function getDayName(number){
    switch(number){
        case 0 :
            return "Sunday";
            case 1 :
            return "Monday";
            case 2 :
            return "Tueday";
            case 3 :
            return "Wednesday";
            case 4 :
            return "Thursday";
            case 5 :
            return "Friday";
            case 6 :
            return "Saturday";
    }

}