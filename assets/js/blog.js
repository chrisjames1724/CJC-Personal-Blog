let numberOfBlogs = localStorage.length;

//put this for loop in a function

function renderList() {
  //get the blog data in localStorage

  const blogData = JSON.parse(localStorage.getItem("blog")); // [{}, {}, {}]

  //array of objects

  //inside the forLoop we create dynamic elements for each object(blogPost) in the array

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
    // const h2Elem = $("h2");
    // const pElem = $("p");

    // //create element for username

    // h2Elem.text() = h2Elem.val()
    // pElem.text( )= blogData[i].content;
    // //update username element with text

    // //append elmements to dom
    // h2Elem.append(title);
    // pElem.append(content);
    // pElem.append(username);

    // create an element
    // do something with the element (update text content node)
    // append to dom
  }
}

// for (let counter = 0; counter < numberOfBlogs; counter++) {
//   let blogPost = JSON.parse(localStorage.getItem("blog" + counter));
//   console.log(blogPost);
//   let newBlogPost =
//     "<section> <h2>" +
//     blogPost.title +
//     "</h2><p>" +
//     blogPost.content +
//     "</p><p> Posted by:" +
//     blogPost.username +
//     "</p></section>";
//   $("#blogSection").append(newBlogPost);
// }

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

renderList();
