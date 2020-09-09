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






////////////////SHOW MESSAGE?????????/
import users from './createUsers.js'
const allChatFriends = document.querySelector(".allChatFriends");
allChatFriends.addEventListener("click", (event) => {

  const chatFriend = event.target.closest(".chatFriend");

  if(allChatFriends.querySelector('.clickUser')) allChatFriends.querySelector('.clickUser').classList.remove('clickUser');
  chatFriend.classList.toggle('clickUser')

  console.log(chatFriend.getAttribute('profileid'))
  console.log(users)
  users.find((item)=>{
    if(item.id==chatFriend.getAttribute('profileid')) console.log(item)//////////////////////FOOOOOOOOoo
  })
// users.find()
  

  console.log();
  messageHandler();
});






///////send a message
import {showMyMessage} from "../components/createMessage.js"
function messageHandler() {

  const messageArea = document.querySelector("#messageArea");
  const micro = document.querySelector("#micro");
  
  messageArea.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      micro.innerHTML = '<i class="fas fa-paper-plane"></i>';
      const send = document.querySelector(".fa-paper-plane");
      send.addEventListener('click',()=>{
      if(messageArea.value!=='')showMyMessage(messageArea.value) ////SEND a message to a func
      messageArea.value = '';
      })
    } else {
      micro.innerHTML = '<i class="fas fa-microphone"></i>';
    }
  });
}

// messageHandler();
