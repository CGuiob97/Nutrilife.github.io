document.addEventListener("DOMContentLoaded", function() {
    // Ad placeholders
    const adPlaceholders = [
        document.getElementById('ad1'),
        document.getElementById('ad2'),
        document.getElementById('ad3'),
        document.getElementById('ad4'),
        document.getElementById('ad5')
    ];

    // Function to set ad content
    function setAdContent(adElement, adData) {
        adElement.querySelector('.advert-img').src = adData.link;
        adElement.querySelector('.advert-img').alt = adData.alt;
        adElement.querySelector('.anchor-element').href = adData.href;
    }

    // FormData for the request
    var formdata = new FormData();
    formdata.append("type", "Light Square");
    formdata.append("tags", "food,nutrition,health,fitness");

    // XMLHttpRequest setup
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", completeHandler, false);
    ajax.open("POST", "https://ad.simaneka.com/api/get");
    ajax.setRequestHeader("authorisation", "hLks3oJ8eHxiqAg08QKWObTTpqigGwrK");
    ajax.send(formdata);

    // Event handler for AJAX load
    function completeHandler(event) {
        var response = JSON.parse(event.target.responseText);
        console.log(response);

        // Populate all ad placeholders with the response data
        adPlaceholders.forEach(adElement => {
            setAdContent(adElement, response);
        });
    }
});
