import createUsers from "../scripts/createUsers.js";

function showChatList() {
  let users = createUsers().sort((a, b) => {
    return a.lastMessage[0] - b.lastMessage[0] && a.lastMessage[1] - b.lastMessage[1];
  });

  const allChatFriends = document.querySelector(".allChatFriends");

  for (let item of users) {
    let div = document.createElement("div");
    div.className = "chatFriend";
    div.innerHTML = `<div class="friendPhoto">
<img src=${item.avatar} alt="">
<div class="online"></div>
</div>

<div class="chatFriendName">
<h2>${item.name}</h2>
<p>${item.userName}</p>
</div>
<div class="unreadMessages">
<div class="messagesCount">${item.messages}</div>
<p class="time">${item.lastMessage[0]} ${item.lastMessage[1]}</p>
</div>`;
    allChatFriends.append(div);
  }
}

document.addEventListener("DOMContentLoaded", showChatList);
