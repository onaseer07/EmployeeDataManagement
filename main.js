//here is the javascript file
var config = {
    apiKey: "AIzaSyAOS6eon0UQDs9s-pRnHpB-YVo3obqX7YM",
    authDomain: "employeedatamanagement-59adb.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-59adb.firebaseio.com",
    projectId: "employeedatamanagement-59adb",
    storageBucket: "employeedatamanagement-59adb.appspot.com",
    messagingSenderId: "608459556944"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var eName = $("#eNAme").val().trim();
var role = $("#role").val().trim();
var sDate = $("#sDate").val().trim();
var mWork = $("#mWork").val().trim();
var mRate = $("#mRate").val().trim();
var tBill = $("#tBill").val().trim();



$("#submit").on("click", function(event){
    event.preventDefault();
    
    database.ref().push({
        employerName: eName,
        role: role,
        sDate: sDate,
        mWork: mWork,
        mRate:mRate,
        tBill: tBill
    });
    
    

    
})

// click submit //grabs all information from submit form
