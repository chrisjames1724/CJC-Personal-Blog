let numberOfBlogs = localStorage.length;
for (let counter = 0; counter < numberOfBlogs; counter++) {
  let blogPost = JSON.parse(localStorage.getItem("blog" + counter));
  console.log(blogPost);
  let newBlogPost =
    "<section> <h2" +
    blogPost.title +
    "</h2><p>" +
    blogPost.content +
    "</p><p>" +
    blogPost.username +
    "</p></section>";
  $("#blogSection").append(newBlogPost);
}

const lightDarkEl = $("#lightdark-btn");
let isDark = false;

lightDarkEl.on("click", function () {
  if (isDark) {
    //selecting element of body calling the css file, use css selectors to select DOM elements
    $("body").css({ "background-color": "#ffffff", color: "#1a1a1a" });
    isDark = !isDark;
    lightDarkEl.html("☀️");
  } else {
    $("body").css({ "background-color": "#1a1a1a", color: "#ffffff" });
    isDark = !isDark;
    lightDarkEl.html("🌙");
  }
});
