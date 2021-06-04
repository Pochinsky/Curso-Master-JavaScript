"use strict";

const changeTheme = () => {
  $("body").toggleClass("darkmode");
  if ($("body").hasClass("darkmode")) {
    $("#darkmode").hide();
    $("#lightmode").show();
  } else {
    $("#darkmode").show();
    $("#lightmode").hide();
  }
};

$(document).ready(() => {
  // slider gallery
  if (window.location.href.indexOf("index") > -1) {
    $(".slider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 600,
      responsive: true,
    });
  }
  // articles
  if (window.location.href.indexOf("index") > -1) {
    let posts = [
      {
        title: "Prueba de Titulo 1",
        date: moment().subtract(10, "days").calendar(),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque repudiandae omnis cumque non temporibus animi quibusdam quae eius suscipit tempora, tempore necessitatibus at ex quidem nemo consectetur eaque. Sapiente.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatum provident totam itaque vero qui optio nemo minus, consectetur minima nulla aut a facere eligendi. Praesentium ad voluptate dolorem ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error earum numquam magnam ipsa ex voluptates dignissimos cupiditate dolor. Officia quidem vitae perferendis. Laborum quidem magni ea error corporis fugit!
          `,
      },
      {
        title: "Prueba de Titulo 2",
        date: moment().subtract(10, "days").calendar(),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque repudiandae omnis cumque non temporibus animi quibusdam quae eius suscipit tempora, tempore necessitatibus at ex quidem nemo consectetur eaque. Sapiente.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatum provident totam itaque vero qui optio nemo minus, consectetur minima nulla aut a facere eligendi. Praesentium ad voluptate dolorem ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error earum numquam magnam ipsa ex voluptates dignissimos cupiditate dolor. Officia quidem vitae perferendis. Laborum quidem magni ea error corporis fugit!
          `,
      },
      {
        title: "Prueba de Titulo 3",
        date: moment().subtract(10, "days").calendar(),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque repudiandae omnis cumque non temporibus animi quibusdam quae eius suscipit tempora, tempore necessitatibus at ex quidem nemo consectetur eaque. Sapiente.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatum provident totam itaque vero qui optio nemo minus, consectetur minima nulla aut a facere eligendi. Praesentium ad voluptate dolorem ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error earum numquam magnam ipsa ex voluptates dignissimos cupiditate dolor. Officia quidem vitae perferendis. Laborum quidem magni ea error corporis fugit!
          `,
      },
      {
        title: "Prueba de Titulo 4",
        date: moment().subtract(10, "days").calendar(),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque repudiandae omnis cumque non temporibus animi quibusdam quae eius suscipit tempora, tempore necessitatibus at ex quidem nemo consectetur eaque. Sapiente.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatum provident totam itaque vero qui optio nemo minus, consectetur minima nulla aut a facere eligendi. Praesentium ad voluptate dolorem ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error earum numquam magnam ipsa ex voluptates dignissimos cupiditate dolor. Officia quidem vitae perferendis. Laborum quidem magni ea error corporis fugit!
          `,
      },
    ];
    posts.forEach((item) => {
      var post = `
          <!-- article -->
          <article class="article">
            <h2 class="article__h2">${item.title}</h2>
            <span class="article__date">Fecha de Publicacion: ${item.date}.</span>
            <p class="article__p">${item.content}</p>
            <a class="article__readmore" href="#">Leer mas</a>
          </article>
          <!-- /article -->
          `;
      $(".articles").append(post);
    });
  }
  // clock
  if (window.location.href.indexOf("clock") > -1) {
    setInterval(() => {
      let clock = moment().format("hh:mm:ss");
      $(".clock-container").html("<p>" + clock + "</p>");
    }, 1000);
  }
  // change modes
  $("#darkmode").click(() => {
    changeTheme();
  });
  $("#lightmode").click(() => {
    changeTheme();
  });
  // up page
  $(".up-page").click((e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // submit form
  $(".form-identify").submit((e) => {
    e.preventDefault();
    const username = $(".form-identify__input#name").val();
    localStorage.setItem("username", username);
    if ($("body").hasClass("darkmode")) localStorage.setItem("mode", "dark");
    else localStorage.setItem("mode", "light");
    location.reload();
  });
  // acordeon
  if (window.location.href.indexOf("about") > -1) {
    $(".acordeon").accordion();
  }
  // quit session
  $(".quit").click((e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    $(".sidebar .sidebar__p").html(`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati autem incidunt veritatis assumenda magnam consequuntur, suscipit dolores enim hic laudantium voluptas, rerum nulla totam maxime dolorum quas, at sed est.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum molestias saepe numquam unde inventore perferendis vel sequi aliquam incidunt excepturi? Totam, beatae quis! Dolorem aut, quidem labore nobis excepturi eius.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto dolor eaque sed vero quas eos debitis, fugiat iure nulla ad rerum minus at voluptates mollitia doloremque velit sunt ex.`);
    $(".login").show();
    $(this).hide();
    if ($("body").hasClass("darkmode")) localStorage.setItem("mode", "dark");
    else localStorage.setItem("mode", "light");
    location.reload();
  });
  // local storage manipulation
  let username = localStorage.getItem("username");
  if (username == null) {
    $(".login").show();
    $(".quit").hide();
  } else {
    $(".sidebar .sidebar__p").html("Bienvenido " + username);
    $(".login").hide();
  }
  // form validation
  if (window.location.href.indexOf("contact")) {
    $(".form-identify").datepicker({ dateFormat: "dd-mm-yy" });
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true,
    });
  }
});
