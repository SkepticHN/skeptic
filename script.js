const searchButton = document.querySelector("#buttontext");

searchButton.addEventListener("click", function() {
  // Get the user's search query
  const query = document.querySelector("#search-query").value;

  // Redirect the user to a Google search link
  window.location.href = `https://www.google.com/search?q=${query}`;
});