  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDo4I2PmnFFc0GpWou0yAjKF0GD1-OUfHw",
    authDomain: "timesheet-94b9f.firebaseapp.com",
    databaseURL: "https://timesheet-94b9f.firebaseio.com",
    projectId: "timesheet-94b9f",
    storageBucket: "timesheet-94b9f.appspot.com",
    messagingSenderId: "1054519257767"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

database.ref().on("child_added", function(childSnapshot){
          console.log(childSnapshot.val());
          $("#tBody").append(`
          <tr>
            <td>${childSnapshot.val().eName}
            <td>${childSnapshot.val().role}
            <td>${childSnapshot.val().sDate}
            <td>${childSnapshot.val().mWork}
            <td>${childSnapshot.val().mRate}
          `)
})
  
  
  
  $("#submit").on("click", function(event){
      event.preventDefault();
      var employeesData = {
        eName: $("#employeeName").val().trim(),
        role: $("#role").val().trim(),
        sDate: $("#startDate").val().trim(),
        mWork: 0,
        mRate: $("#monthlyRate").val().trim(),
      };
      $("input").val("");



    
          //var tBill = $("#tBill").val().trim();
    
          database.ref().push(
            employeesData
          );

      })
