/* eslint-disable prettier/prettier */
// Material Select Initialization
// Material Select Initialization

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
$(document).ready(function () {
  // Initialize Material Select
  Waves.attach(".btn", ["waves-effect"]);
  $(".mdb-select").material_select();
  $(".material-tooltip-main").tooltip({
    template: "<div class=\"tooltip md-tooltip\"><div class=\"tooltip-arrow md-arrow\"></div><div class=\"tooltip-inner md-inner\"></div></div>"
  });
  $("#modalBtn").click(function (e) {
    e.preventDefault();
    $("#myModal").modal();


  });

});