function toggleNav() {
    document.getElementById("nav").classList.toggle("show");
}

document.querySelector(".navbar-toggler").addEventListener("click", function(event) {
    toggleNav();
    event.stopPropagation();
});

document.getElementById("nav").addEventListener("click", function(event) {
    event.stopPropagation();
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});

var workdata=[
  {
      title:"business card design",
      img:"assets/img/img1.jpg",
      txt:"Lorem ipsum dolor sit amet.",
  },
  {
      title:"brand identity",
      img:"assets/img/img2.jpg",
      txt:"Lorem ipsum dolor sit amet.",
  },
  {
      title:"digital consultancy",
      img:"assets/img/img3.jpg",
      txt:"Lorem ipsum dolor sit amet.",
  }
];

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".work")) {
      for (var i = 0; i < workdata.length; i++) {
          document.querySelector(".work .row").innerHTML += `
          <div class="col-lg-4">
              <div class="box" style="width: 17rem;">
                <div class="con">
                  <img src="${workdata[i].img}" class="card-img-top" alt="..." height="200px">
                  <div class="card-body">
                      <h5 class="card-title">${workdata[i].title}</h5>
                      <p class="card-text">${workdata[i].txt}</p>
                      <a href="#" class="btn">Read more</a>        
                  </div>
                </div>
              </div>
          </div>`
      }
  }
});

var data=[
    {
        title:"create a webapp",
        image:"assets/img/img4.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title:"write a creative blog",
        image:"assets/img/img5.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title:"post your first blog",
        image:"assets/img/img6.jpg",
        text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector(".blog")) {
        for (var i = 0; i < data.length; i++) {
            document.querySelector(".blog .row").innerHTML += `
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="img"><img src="${data[i].image}" class="card-img-top" alt="..." height="200px"></div>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <p class="card-text">${data[i].text}</p>
                        <a href="#" class="button">Continue</a>
                    </div>
                </div>
            </div>`
        }
    }
  });