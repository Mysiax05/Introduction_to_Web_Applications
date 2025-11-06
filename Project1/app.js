// Highlighting the page you are currently on
(function () {
  var page = document.body.getAttribute("data-page");
  var links = document.querySelectorAll(".menu a");
  links.forEach(function (a) {
    var href = a.getAttribute("href");
    if (page === "home" && href === "index.html") a.classList.add("active");
    if (page === "gallery" && href === "gallery.html")
      a.classList.add("active");
    if (page === "contact" && href === "contact.html")
      a.classList.add("active");
  });
})();

// Footer Clock
(function () {
  var span = document.getElementById("time");
  if (!span) return;

  function two(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function tick() {
    var d = new Date();
    span.textContent =
      two(d.getHours()) + ":" + two(d.getMinutes()) + ":" + two(d.getSeconds());
  }
  tick();
  setInterval(tick, 1000);
})();

// Form data validation
var form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value.trim();
    var temat = document.getElementById("topic").value;
    var wiad = document.getElementById("message").value.trim();

    var ok = true;

    // e-mail pattern
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) ok = false;
    if (!temat) ok = false;
    if (wiad.length < 3) ok = false;

    document.getElementById("announcement").style.display = ok
      ? "block"
      : "none";
    document.getElementById("error").style.display = ok ? "none" : "block";
  });
}
