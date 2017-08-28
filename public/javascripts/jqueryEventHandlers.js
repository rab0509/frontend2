$(document).ready(function() {
  $(".carousel").carousel();
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
  $(".slider").slider();

  $("#wences").on({
    click: function() {
      $(".carousel").carousel("set", 4);
    }
  });

  $("#charles").on({
    click: function() {
      $(".carousel").carousel("set", 5);
    }
  });

  $("#vitus").on({
    click: function() {
      $(".carousel").carousel("set", 0);
    }
  });

  $("#tyn").on({
    click: function() {
      $(".carousel").carousel("set", 1);
    }
  });

  $("#castle").on({
    click: function() {
      $(".carousel").carousel("set", 2);
    }
  });

  $("#clock").on({
    click: function() {
      $(".carousel").carousel("set", 6);
    }
  });

  $("#city").on({
    click: function() {
      $(".carousel").carousel("set", 3);
    }
  });

  $("#brandButton").on({
    // index page
    mouseenter: function() {
      $(".brand").html("The mouse has entered the Brand area");
    },
    mouseleave: function() {
      $(".brand").html("The mouse has left the Brand area");
    },
    click: function() {
      $(".brand").html("");
    }
  });

  $("#history").on({
    // index page
    mouseenter: function() {
      $(".hist").html("The mouse has entered the History Anchor");
    },
    mouseleave: function() {
      $(".hist").html("The mouse has left the History Anchor");
    },
    click: function() {
      $(".hist").html("");
    }
  });

  $("#tourism").on({
    // index page
    mouseenter: function() {
      $(".tour").html("The mouse has entered the Tourism Anchor");
    },
    mouseleave: function() {
      $(".tour").html("The mouse has left the Tourism Anchor");
    },
    click: function() {
      $(".tour").html("");
    }
  });

  $("#transport").on({
    // index page
    mouseenter: function() {
      $(".trans").html("The mouse has entered the Transportation Anchor");
    },
    mouseleave: function() {
      $(".trans").html("The mouse has left the Transportation Anchor");
    },
    click: function() {
      $(".trans").html("");
    }
  });

  $("#about").bind("click", function() {
    // about page
    alert("About Button Clicked");
  });
});
