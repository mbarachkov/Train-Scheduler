// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJy51Mr_fPUFJ2e5EqTUFDSmVhlu9sWPA",
    authDomain: "train-scheduler-c51e5.firebaseapp.com",
    databaseURL: "https://train-scheduler-c51e5.firebaseio.com",
    projectId: "train-scheduler-c51e5",
    storageBucket: "train-scheduler-c51e5.appspot.com",
    messagingSenderId: "133694487213",
    appId: "1:133694487213:web:488e40ec7eb0edad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
$("#submitId").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#trainName").val();
    var myDestination = $("#destination").val();
    var firstTime = $("#firstTime").val();
    var myFrequency = $("#frequency").val();
    console.log(trainName)

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTime").val("");
    $("#frequency").val("");
    
    database.ref().push({
        train: trainName,
        destination: myDestination,
        time: firstTime,
        frequency: myFrequency
    });
});
database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val()
    var trainName = data.train;
    var myDestination = data.destination;
    var firstTime = data.time;
    var myFrequency = data.frequency;

    var tRemainder = moment().diff(moment.unix(firstTime), "minutes") % frequency;
    var tMinutes = myFrequency - tRemainder;
    var tArrival = moment().add(tMinutes, "m").format("HH:mm A");

    $("#thisCard > tbody").append

    var trNode = $("<tr>");
    trNode.append($("<td>").text(trainName));
    trNode.append($("<td>").text(myDestination)); 
    trNode.append($("<td>").text(myFrequency));
    trNode.append($("<td>").text(tArrival));
    trNode.append($("<td>").text(tMinutes));
    $("tbody").append(trNode);

});
