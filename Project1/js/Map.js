function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLocation = [position.coords.latitude, position.coords.longitude];

        var map = L.map('map').setView(userLocation, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        fetch('https://nominatim.openstreetmap.org/reverse?lat='+ userLocation[0]+'&lon='+ userLocation[1]+ '&format=json')
        .then(function(responce){
            return responce.json();


        })
        .then(function(data){
            var address = data.display_name || "Address not Found";
            L.marker(userLocation).addTo(map)
            .bindPopup('You Are Here:' + address)
            .openPopup();

            speakAddress(address);
    });

});

}

function speakAddress(address){
    if ('speechSynthesis' in window){
        var speech = new speechSynthesisUtterance(address);
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    } else {
        console.log("Speech synthesis not supported in this browser.")
    }

}

document.addEventListener('DOMContentLoaded', initMap);
