$(document).ready(
  // pics slider
  () => {
    $(".slider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 600,
      responsive: true,
    });
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
);
