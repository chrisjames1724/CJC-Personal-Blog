let blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("Username");
  let title = document.getElementById("Title");
  let content = document.getElementById("Content");

  if (username.value == "" || title.value == "" || content.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} a title of ${title.value} and a content ${content.value}`
    );
    let blog = {
      username: username.value,
      title: title.value,
      content: content.value,
    };
    // localStorage.clear();
    let numberOfBlogs = localStorage.length;
    // Adding new blog
    localStorage.setItem("blog" + numberOfBlogs, JSON.stringify(blog));
    let storedBlog = localStorage.getItem("blog" + numberOfBlogs);
    console.log(JSON.parse(storedBlog));
    console.log(localStorage);
    // Format content into a JSON Object to put in local storage

    window.open("./blog.html");
  }
});

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
