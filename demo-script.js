// demo-script.js

let map;
let redZoneMarker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12
    });
}

function showRedZone() {
    if (redZoneMarker) {
        redZoneMarker.setMap(null);
    }

    redZoneMarker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: 'Red Zone',
        icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        }
    });

    const circle = new google.maps.Circle({
        map: map,
        radius: 1000, // 1 km
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        center: { lat: 37.7749, lng: -122.4194 }
    });

    map.setCenter({ lat: 37.7749, lng: -122.4194 });
}

function showLocation() {
    const locationDemo = document.getElementById('location-demo');
    locationDemo.innerHTML = '<p style="color: green; font-size: 1.5em; text-align: center; line-height: 200px;">Location Shared: San Francisco</p>';
}

function startTimer() {
    const timerDemo = document.getElementById('timer-demo');
    let timeLeft = 7 * 60; // 7 minutes
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDemo.innerHTML = '<p style="color: red; font-size: 1.5em; text-align: center; line-height: 200px;">Time Expired</p>';
            return;
        }
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDemo.innerHTML = `<p style="color: black; font-size: 1.5em; text-align: center; line-height: 200px;">${minutes}:${seconds < 10 ? '0' : ''}${seconds}</p>`;
        timeLeft--;
    }, 1000);
}

function simulateEmergency() {
    const emergencyDemo = document.getElementById('emergency-demo');
    emergencyDemo.innerHTML = '<p style="color: red; font-size: 1.5em; text-align: center; line-height: 200px;">Emergency Simulated: Live Data Shared</p>';
}
