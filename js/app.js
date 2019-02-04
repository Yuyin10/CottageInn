  $(document).ready(function(){
    $('.sidenav').sidenav();
      $('.slider').slider();
       $('input#password, input#password1').characterCounter();
        $('.datepicker').datepicker();
    $('.carousel').carousel({dist:0, shift:30});
       $('select').formSelect();
        $('input.autocomplete').autocomplete({
      data: {
        "Suite": null,
		"Sencilla": null,
		"Doble": null,
		"Twin": null,
		"Familiar": null,
		"Queen Size": null,
		"King Size": null,
		"Lujo": null,
        "Romantica": null,
		"Presidencial": null,
      },
    });
  });