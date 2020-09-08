//on click show current user info (pop up)
const showCurrentUserInfo = document.querySelector("#showCurrentUserInfo");
const currentUserInfo = document.querySelector(".currentUserInfo");
let currentUserInfoShowCheck = false;

showCurrentUserInfo.addEventListener("click", () => {
  if (!currentUserInfoShowCheck) {
    currentUserInfo.style.top = "0";
    currentUserInfo.style.position = "relative";
    currentUserInfoShowCheck = !currentUserInfoShowCheck;
  } else {
    currentUserInfo.style.top = "-250px";
    setTimeout(() => {
      currentUserInfo.style.position = "absolute";
    }, 100);
    currentUserInfoShowCheck = !currentUserInfoShowCheck;
  }
});

//clear search input
const clearSearchInput = document.querySelector("#clearSearchInput");
const searchInput = document.querySelector("#searchInput");

clearSearchInput.addEventListener("click", () => {
  if (searchInput.value) searchInput.value = "";
});
