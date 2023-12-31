var header = document.getElementById("header");
var arrlist = [];
var links = document.querySelectorAll(".nav-link"); // groups of elements
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    // console.log(e.target.innerHTML);
    var currentmael = e.target.innerHTML;
    header.classList.add("d-none");
    getData(currentmael);
  });
}

// console.log(links);
// getData("pizza");

function getData(meal) {
  var http = new XMLHttpRequest();
  http.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  http.send();
  http.addEventListener("readystatechange", function () {
    if (http.readyState == 4) {
      arrlist = JSON.parse(http.response).recipes;
      Display();
    }
  });
}

function Display() {
  var cols = ``;
  for (var i = 0; i < arrlist.length; i++) {
    cols += `  <div class="col-md-4">
    <div class="card h-100 smaill shadow">
      <img src="${arrlist[i].image_url}" height="200" alt="" class="card-img-top" />
      <div class="card-body text-center">
        <h5>${arrlist[i].title}</h5>
        <a target="_blank" class="btn btn-warning" href="${arrlist[i].source_url}"
          >Source</a
        >
      </div>
    </div>
  </div>`;
  }
  document.getElementById("rowData").innerHTML = cols;
}
