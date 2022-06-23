let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime() {
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Minutes:" + date.getSeconds() + "Secs:";
}

function makeAJAXCall(methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // console.log(methodType + " State changed called at :=> " + showTime() + " RS:=> " + xhr.readyState + " Status:=> " + xhr.status);
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responsetext);
            } else if (xhr.status >= 400) {
                console.log("Handle 400 client Error or 500 Server error at :=> " +showTime());
            }
        }

    }
    xhr.open(methodType, url, async);
    if(data){
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methodType + "request send to the server at :=> " + showTime());
}

const getURL = "http://localhost:3000/employees/1";
function getUserDetails(data) {
    console.log("Get user data at :=> " + showTime() + "data:=> " + data)
}

makeAJAXCall("GET", getURL, getUserDetails, true);
console.log("made GET AJAXCall to server at :=> " + showTime());

const deleteURL = "http://localhost:3000/employees";
function userDeleted(data){
    console.log("USer Deleted at:=> "+ showTime() +" data:=> " +data)
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);
console.log("made DELETE AJAXCall to server at :=> " + showTime());

const postURL = "http://localhost:3000/employees";
const emplData = {"name" : "Harry", "Salary": "5000"};
function userAdded(data){
    console.log("User Added at:=> " + showTime() + " data:=> " +data)
}
makeAJAXCall("POST", postURL, userAdded, true, emplData);
console.log("made POST AJAXCall to server at :=> " + showTime());