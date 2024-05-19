var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "food,nutrition,health,fitness");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "hLks3oJ8eHxiqAg08QKWObTTpqigGwrK");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);

    // Light Square Ads
    document.querySelectorAll('.light-square .advertIMG').forEach(function(adElement) {
        adElement.src = response.link;
        adElement.alt = response.alt;
    });

    document.querySelectorAll('.light-square .anchorElement').forEach(function(anchorElement) {
        anchorElement.href = response.href;
    });

    // Horizontal Strip Ads
    document.querySelectorAll('.horizontal-strip .advertIMG').forEach(function(adElement) {
        adElement.src = response.link;
        adElement.alt = response.alt;
    });

    document.querySelectorAll('.horizontal-strip .anchorElement').forEach(function(anchorElement) {
        anchorElement.href = response.href;
    });

    // Update header text with ad message
    document.querySelector('.headerText').innerHTML = response.message;
}
