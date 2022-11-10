var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
 showSlides(slideIndex +=n);
}
// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n) {
    var i;
    var slides =
        document.getElementsByClassName("mySlides");
    var dots =
        document.getElementsByClassName("dot");
    if (n > slides.length)
        {slideIndex = 1}
    if (n < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length;i++){
        slides
        [i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("activa", "");
    }
    slides
    [slideIndex-1].style.display="block";
    dots
    [slideIndex-1].className +="active";
}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
Forms
Place various form controls and components within a navbar with .form-inline.

Search
Copy
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
Immediate children elements in .navbar use flex layout and will default to justify-content: between. Use additional flex utilities as needed to adjust this behavior.

Navbar
Search
Copy
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>