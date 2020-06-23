$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
  //display current day & time.

  console.log("hi");
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  //Assign saveBtn click listener for user input and time
  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
  })

  //load any saved data from LocalStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  //$("#hour-9 .description").val("skateboard");
  //$(find my elements).val(put a value in there)''
  // $ = jquery thing
  //$(html #elementID .class).val(Storage.getitem(itemName));


  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


  function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();


    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(blockHour, currentHour);

      //check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  hourTracker();
})