let numberOfBlogs = localstorage.length;
for (let counter = 0; counter < numberOfBlogs; counter++) {
  let blog = localstorage.getItem(blog + counter);
  console.log(blog);
}

const lightDarkEl = $("#lightdark-btn");
let isDark = true;

lightDarkEl.on("click", function () {
  if (isDark) {
    //selecting element of body calling the css file, use css selectors to select DOM elements
    $("body").css({ "background-color": "#d9e9e8", color: "#1a1a1a" });
    isDark = !isDark;
  } else {
    $("body").css({ "background-color": "#1a1a1a", color: "#d9e9e8" });
    isDark = !isDark;
  }
});
