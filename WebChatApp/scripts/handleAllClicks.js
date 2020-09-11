//on click show current user info (pop up)
const showCurrentUserInfo = document.querySelector("#showCurrentUserInfo");
const myInfo = document.querySelector(".myInfo");
let currentUserInfoShowCheck = false;

showCurrentUserInfo.addEventListener("click", () => {
  if (!currentUserInfoShowCheck) {
    myInfo.style.top = "0";
    myInfo.style.position = "relative";
    currentUserInfoShowCheck = !currentUserInfoShowCheck;
  } else {
    myInfo.style.top = "-250px";
    setTimeout(() => {
      myInfo.style.position = "absolute";
    }, 100);
    currentUserInfoShowCheck = !currentUserInfoShowCheck;
  }
});

////////////////SHOW MESSAGE//////////
import users from "./createUsers.js";
import showChatBox from "../components/showChatBox.js";
const allChatFriends = document.querySelector(".allChatFriends");
allChatFriends.addEventListener("click", (event) => {
  const chatFriend = event.target.closest(".chatFriend");

  if (allChatFriends.querySelector(".clickUser"))
    allChatFriends.querySelector(".clickUser").classList.remove("clickUser");
  chatFriend.classList.toggle("clickUser");

  users.find((item) => {
    if (item.id == chatFriend.getAttribute("profileid")) showChatBox(item);
  });

  messageHandler();
  keyHandler();
});

///////send a message
import { showMyMessage } from "../components/createMessage.js";
function messageHandler() {
  const micro = document.querySelector("#micro");
  const messageArea = document.querySelector("#messageArea");

  messageArea.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      micro.innerHTML = '<i class="fas fa-paper-plane"></i>';
      const send = document.querySelector(".fa-paper-plane");

      if (messageArea.value !== "")
        send.addEventListener("click", () => {
          showMyMessage(messageArea.value); ////SEND a message to a func
          messageArea.value = "";
          micro.innerHTML = '<i class="fas fa-microphone"></i>';
        });
    } else {
      micro.innerHTML = '<i class="fas fa-microphone"></i>';
    }
  });
}

function keyHandler() {
  const messageArea = document.querySelector("#messageArea");
  let pressed = new Set();

  document.addEventListener("keydown", (event) => {
    pressed.add(event.code);
    console.log(pressed)
    if (pressed.has("Enter") && pressed.has("ShiftLeft")) {
      console.log("enr");
    } else if (pressed.has("Enter") && messageArea.value !== "") {
      showMyMessage(messageArea.value);
      messageArea.value = "";
    }

    pressed.clear();
  });
}
