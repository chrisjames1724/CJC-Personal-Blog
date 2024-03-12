let numberOfBlogs = localStorage.length;
// ^ defining the variable which will be used in the function from local storage to populate the blog posts

function renderList() {
  //get the blog data in localStorage

  //This is using Jquery to define the variable "blogdata" which is being pulled from local storage to populate the blog posts using the for loop below to do this
  const blogData = JSON.parse(localStorage.getItem("blog"));

  for (let i = 0; i < blogData.length; i++) {
    //DOM MANIPULATION
    let newBlogPost =
      "<section> <h2>" +
      blogData[i].title +
      "</h2><p>" +
      blogData[i].content +
      "</p><p> Posted by:" +
      blogData[i].username +
      "</p></section>";
    $("#blogSection").append(newBlogPost);
  }
}

//setting up a constant whihch will be used in the light/dark button function
const lightDarkEl = $("#lightdark-btn");
let isDark = false;

// function which makes the light and dark modes turn on and off
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

renderList();
