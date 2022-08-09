"use strict";

// 漢堡選單
document.querySelector("#hamburger-menu-icon").addEventListener("click", function () {
  var dom = document.querySelector("#menu-list");
  dom.classList.add("duration-500");
  dom.classList.toggle("max-h-min");
  setTimeout(function () {
    dom.classList.remove("duration-500");
  }, 500);
}); // product.html - tabs 區塊切換

Array.from(document.querySelectorAll("#tabs-list li a")).forEach(function (item) {
  return item.addEventListener("click", function (e) {
    e.preventDefault();
    var link = this.getAttribute("data-link");
    document.querySelector('#tabs-list a.active').classList.remove("active");

    switch (link) {
      case "optical":
        document.querySelector("[data-link='optical']").classList.add("active");
        hideAll();
        document.querySelector("[data-target='optical']").classList.remove("hidden");
        break;

      case "sunglasses":
        console.log(1);
        document.querySelector("[data-link='sunglasses']").classList.add("active");
        hideAll();
        document.querySelector("[data-target='sunglasses']").classList.remove("hidden");
        break;

      case "functional":
        document.querySelector("[data-link='functional']").classList.add("active");
        hideAll();
        document.querySelector("[data-target='functional']").classList.remove("hidden");
        break;
    }

    function hideAll() {
      Array.from(document.querySelectorAll("section")).forEach(function (sec) {
        return sec.classList.add("hidden");
      });
    }
  });
}); // store.html & blog.html - list & detail 切換

var url = new URL(location.href);

if (url.searchParams.get("id")) {
  document.querySelector("[data-target='list']").classList.add("hidden");
  document.querySelector("[data-target='detail']").classList.remove("hidden");
}
//# sourceMappingURL=all.js.map
