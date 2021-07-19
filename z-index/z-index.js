const zIndexSelectors = document.querySelectorAll("#z-index");
const containers = document.querySelector(".containers");
console.log(zIndexSelectors);
console.log(containers);

zIndexSelectors.forEach((zIndexSelector) => {
  zIndexSelector.addEventListener("change", function (e) {
    const divName = e.target.getAttribute("name");
    const div = containers.querySelector(`.${divName}`);
    div.style.zIndex = e.target.value;
    const p = div.querySelector("#pz-index");
    p.innerHTML = "z-index: " + e.target.value;
  });
});
