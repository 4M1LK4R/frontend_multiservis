function CerrarSideNav() {
  $('button-collapse').sideNav('hide');
};
$("#AbriMenu").click(function () {
  $('.button-collapse').sideNav('show');
});
$(document).ready(function () {
  $('.modal').modal();
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({ delay: 50 });
  $('.slider').slider();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
  $('select').material_select();
  $('.scrollspy').scrollSpy();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});


