$(document).ready(function () {
     //  menu-area
     $('.bara-area').click(function () {
          $('.header-menu').addClass('header-menu-come')
     });
     $('.close').click(function () {
          $('.header-menu').removeClass('header-menu-come')
     });
     // fancy-box
     $("a.grouped_elements").fancybox();
});


$(window).scroll(function () {
     if ($(window).scrollTop() > 75) {
          $('.header-section').addClass('header-2');
     } else {
          $('.header-section').removeClass('header-2')
     }
});

function emailsend() {
     Email.send({
          Host : "smtp.email.com",
          Username : "sumonsm167@gmail.com",
          Password : "sUMoN1526",
          To : "sumon.llcg@gmail.com",
          From : document.getElementById("email").value,
          Subject : "new contact form enquiry",
          Body : "name: " + docunent.getElementById("name").value +
               "<br> email: " + document.getElementById("email").value +
               "<br> message : " + document.getElementById("message").value 
      }).then(
        message => alert("Send Succesfully")
      );

};



//  start-progress
var wind = $(window);
// progress bar
wind.on('scroll', function () {
     $(".skills-progress span").each(function () {
          var bottom_of_object =
               $(this).offset().top + $(this).outerHeight();


          var bottom_of_window =
               $(window).scrollTop() + $(window).height();


          var myVal = $(this).attr('data-value');
          if (bottom_of_window > bottom_of_object) {
               $(this).css({
                    width: myVal
               });
          }
     });
});
// End Progress

// back-to-Top-start
var btn = $('#button');

$(window).scroll(function () {
     if ($(window).scrollTop() > 300) {
          btn.addClass('show');
     } else {
          btn.removeClass('show');
     }

     // Sticky Nav
     if ($(window).scrollTop() > 300) {
          $('.myMenu').addClass('sticky-nav');
     } else {
          $('.myMenu').removeClass('sticky-nav');
     }


});

btn.on('click', function (e) {
     e.preventDefault();
     $('html, body').animate({
          scrollTop: 0
     }, 300);
});
// back-to-top-end
$("#loader").fadeTo(5000,1).fadeOut(1000);