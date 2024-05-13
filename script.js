function updateRealTime() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("real-time").innerHTML = "Jam: " + time;
    setTimeout(updateRealTime, 1000); // Update every second
}

// Function to display greeting based on time of the day
function displayGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = "";
    if (hour < 12) {
        greeting = "Ngopi!";
    } else if (hour < 18) {
        greeting = "Makan!";
    } else {
        greeting = "Tidur!";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

// Call the functions when the page loads
updateRealTime();
displayGreeting();