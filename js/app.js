$(function() {
    /*Filter*/ 
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'все') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    /*modal*/

    const modalCall = $("[data-modal");
    const modalClose = $("[data-close");
    modalCall.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        console.log(modalId);
    });

    modalClose.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });


    $(".modal").on("click", function(event){
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function(event){
        event.stopPropagation()
    });




    /*return to site*/
    
    function changeurl(){eval(self.location="https://NartovaNatalia.net");}
window.setTimeout("changeurl();",3000);

/*скролл - навигация*/
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 15000);
        });
      });

      $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          bottom = $(id).offset().bottom;
          $('body,html').animate({scrollTop: bottom}, 15000);
        });
      });

      /*mobile nav*/ 
      const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /*sending emeil*/
    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	}); 

});

