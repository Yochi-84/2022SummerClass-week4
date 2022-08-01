// 漢堡選單
document.querySelector("#hamburger-menu-icon").addEventListener("click", () => {
  document.querySelector("#menu-list").classList.toggle("max-h-65");
});

// product.html - tabs 區塊切換
Array.from(document.querySelectorAll("#tabs-list li a")).forEach(item => item.addEventListener("click", function (e) {
  e.preventDefault();

  let link = this.getAttribute("data-link");
  document.querySelector('#tabs-list a.active').classList.remove("active");
  switch (link) {
    case "optical":
      document.querySelector("[data-link='optical']").classList.add("active");
      hideAll();
      document.querySelector("[data-target='optical']").classList.remove("hidden");
      break;
    case "sunglasses":
      console.log(1)
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
    Array.from(document.querySelectorAll("section")).forEach(sec => sec.classList.add("hidden"));
  }
})
);

// store.html & blog.html - list & detail 切換
const url = new URL(location.href);
if(url.searchParams.get("id")) {
  document.querySelector("[data-target='list']").classList.add("hidden");
  document.querySelector("[data-target='detail']").classList.remove("hidden");
}