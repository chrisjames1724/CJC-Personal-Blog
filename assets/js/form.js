let blogForm = document.getElementById("blogForm");

function readFromStorage() {
  const blogData = localStorage.getItem("blog");
  const data = JSON.parse(blogData);
  return data || [];
}

//This is the function which is used to store the inputs of username, contnet and blog title into local storage. This also has alerts for submitting data prompting you fill in all fields or validating that the submoission was correct and redirects you to the blog page.
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const storageData = readFromStorage(); //[]

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

    storageData.push(blog);
    // localStorage.clear();

    // Adding new blog
    localStorage.setItem("blog", JSON.stringify(storageData));

    //Opens the blog page
    window.open("./blog.html");
  }
});

////setting up a constant whihch will be used in the light/dark button function
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
