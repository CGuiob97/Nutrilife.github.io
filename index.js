// Create a new FormData object
var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "music,party");

// Create a new XMLHttpRequest object
var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

// Configure the request
ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "hLks3oJ8eHxiqAg08QKWObTTpqigGwrK");

// Send the request
ajax.send(formdata);

// Handle the response from the server
function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    // Log the response to the console
    console.log(response);

    // Update multiple ad containers with the response data
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(adContainer => {
        const img = adContainer.querySelector('.advertIMG');
        const anchor = adContainer.querySelector('.anchorElement');
        img.src = response.link;
        img.alt = response.alt;
        anchor.href = response.href;
    });

    // Update the header text
    document.querySelector('.headerText').innerHTML = response.message;
}
