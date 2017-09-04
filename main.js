
navigator.geolocation.getCurrentPosition(success,fail);
function success(position){
    var latitude = position.coords.latitude;
    $("#latitude").html("Your latitude: " + latitude );
    var longitude = position.coords.longitude;
    $("#longtitude").html("<br>" + "Your longitude: " + longitude);
    var apiKey = "ee2840e6ed61cf0a57fe3534e7db01e6";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apiKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
    }).done(function(response){
        $("#location").html("Current location: " + response.name);
        $("#weather").html("Current weather: " + response.weather[0].main);
        var temp = (response.main.temp * (9/5) - 459.67);
        $("#temperature").html("Current temperature: " + temp.toFixed(2));
    });
}
function fail(){
    $("#fail").html("Can't get your location");
}
