let numberOfBlogs = localstorage.length;
for (let counter = 0; counter < numberOfBlogs; counter++) {
  let blog = localstorage.getItem(blog + counter);
  console.log(blog);
}
