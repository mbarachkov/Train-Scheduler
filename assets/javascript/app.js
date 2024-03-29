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

    database.ref().on("child_added", function (snapshot) {
        var data = snapshot.val()
        var trainName = data.train;
        var myDestination = data.destination;
        var tFrequency = myFrequency;
        var firstTime = "03:30";
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        var currentTime = moment();
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var tRemainder = diffTime % tFrequency;
        var tMinutesTillTrain = tFrequency - tRemainder;
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");

        console.log(moment(currentTime).format("HH:mm"));
        console.log(diffTime);
        console.log(tRemainder);
        console.log(tMinutesTillTrain);
        console.log(moment(nextTrain).format("HH:mm"));

        $("#thisCard > tbody").append

        var trNode = $("<tr>");
        trNode.append($("<td>").html(trainName));
        trNode.append($("<td>").html(myDestination));
        trNode.append($("<td>").html(tFrequency));
        trNode.append($("<td>").html(moment(nextTrain).format("HH:mm A")));
        trNode.append($("<td>").html(tMinutesTillTrain));
        $("tbody").append(trNode);

    });



});
