

$(window).on('load', ()=> {
    $('.loader').slideUp();
    $('.loader-wrapper').fadeOut();
    
    $("#home").css("opacity", "1");
    $(".home-content").css("transform", "translateY(0)");
})
$(document).ready(() => {

    // navbar animation on scroll script
    $(window).scroll(() => {
        if($(window).width() > 970) {
            if(this.scrollY > 40 && this.scrollY < 220) {
                $('.navbar').addClass("sticky");
            } else if(this.scrollY <= 40) {
                $('.navbar').removeClass("sticky");
                $('.navbar').removeClass("dark");
            } else if(this.scrollY >= 220 && this.scrollY <= 950) {
                $('.navbar').removeClass("blue");
                $('.navbar').removeClass("sticky");
                $('.navbar').addClass("dark");
            } else if(this.scrollY > 950 && this.scrollY < 1600) {
                $('.navbar').removeClass("dark");
                $('.navbar').addClass("blue");
            } else if(this.scrollY >= 1600 && this.scrollY < 2300) {
                $('.navbar').removeClass("blue");
                $('.navbar').addClass("dark");
                $('.navbar').removeClass("pink");
            } else if(this.scrollY >= 2300 && this.scrollY < 3000) {
                $('.navbar').addClass("pink");
                $('.navbar').removeClass("green");
            } else {
                $('.navbar').addClass("green");
                $('.navbar').removeClass("pink");
            }
        } else if($(window).width() <= 970 && $(window).width() > 750) {
            if(this.scrollY > 40 && this.scrollY < 220) {
                $('.navbar').addClass("sticky");
            } else if(this.scrollY <= 40) {
                $('.navbar').removeClass("sticky");
                $('.navbar').removeClass("dark");
            } else if(this.scrollY >= 220 && this.scrollY <= 950) {
                $('.navbar').removeClass("blue");
                $('.navbar').removeClass("sticky");
                $('.navbar').addClass("dark");
            } else if(this.scrollY > 950 && this.scrollY < 2150) {
                $('.navbar').removeClass("dark");
                $('.navbar').addClass("blue");
            } else if(this.scrollY >= 2150 && this.scrollY < 3200) {
                $('.navbar').removeClass("blue");
                $('.navbar').addClass("dark");
                $('.navbar').removeClass("pink");
            } else if(this.scrollY >= 3200 && this.scrollY < 3700) {
                $('.navbar').addClass("pink");
                $('.navbar').removeClass("green");
            } else {
                $('.navbar').addClass("green");
                $('.navbar').removeClass("pink");
            }
        } else {
            if(this.scrollY > 40 && this.scrollY < 220) {
                $('.navbar').addClass("sticky");
            } else if(this.scrollY <= 40) {
                $('.navbar').removeClass("sticky");
                $('.navbar').removeClass("dark");
            } else if(this.scrollY >= 220 && this.scrollY <= 1200) {
                $('.navbar').removeClass("blue");
                $('.navbar').removeClass("sticky");
                $('.navbar').addClass("dark");
            } else if(this.scrollY > 1200 && this.scrollY < 2600) {
                $('.navbar').removeClass("dark");
                $('.navbar').addClass("blue");
            } else if(this.scrollY >= 2600 && this.scrollY < 3700) {
                $('.navbar').removeClass("blue");
                $('.navbar').addClass("dark");
                $('.navbar').removeClass("pink");
            } else if(this.scrollY >= 3700 && this.scrollY < 4500) {
                $('.navbar').addClass("pink");
                $('.navbar').removeClass("green");
            } else {
                $('.navbar').addClass("green");
                $('.navbar').removeClass("pink");
            }
        }

        if (this.scrollY > 1000) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // slide up script
    $('.scroll-up-btn').click(() => {
        $('html').animate({scrollTop: 0});
    });

    // toggle menu script
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["programmer.", "problem-solver.", "developer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // prevent right click in the website
    $("body").on("contextmenu", function(e) {
        return false;
    });

    // prevent image dragging
    $("img").mousedown(function(e) {
        e.preventDefault()
    });
});


// sending email on contact form submit
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("contact-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.innerHTML = "Message Sent!";
    $("#status").css("background-color", "#54e346");
    $("#status").fadeIn("slow", function () {
        $(this).delay(2000).fadeOut("slow");
    });
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    $("#status").css("background-color", "#FF3737");
    $("#status").fadeIn("slow", function () {
        $(this).delay(2000).fadeOut("slow");
    });
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
