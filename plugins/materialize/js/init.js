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
  $('input.autocomplete').autocomplete({
    data: {
      "101010": null,
      "202020": null,
      "303030":  null,
      "404040": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function (val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});


