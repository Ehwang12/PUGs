/* eslint-disable prettier/prettier */
// Material Select Initialization
// Material Select Initialization

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
$(document).ready(function () {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  });
  
  wow.init();
  // Initializes Waves for buttons
  Waves.attach(".btn", ["waves-effect"]);

  // Initialize Material Select
  $(".mdb-select").material_select();

  $("#modalBtn").click(function (e) {
    e.preventDefault();
    $("#myModal").modal();
  });

  $("#createEvent-btn").click(function (e) {
    e.preventDefault();
    $("#modalEvent").modal();
  });
})
