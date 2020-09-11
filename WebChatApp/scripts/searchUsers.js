import users from "./createUsers.js";
import showChatList from "../components/addFriend.js";

showChatList(users);

const search = document.querySelector("#searchInput");
search.addEventListener("input", (event) => {
  let arr = [];
  for (let user of users) {
    let name = user.name.split(' ');
    if (
      name[0].indexOf(event.target.value)!==-1 ||
      name[1].indexOf(event.target.value)!==-1
    ) {
      arr.push(user);
    }
  }
  showChatList(arr);
});


//clear search input
const clearSearchInput = document.querySelector("#clearSearchInput");
const searchInput = document.querySelector("#searchInput");

clearSearchInput.addEventListener("click", () => {
  if (searchInput.value) searchInput.value = "";
  showChatList(users)
});
