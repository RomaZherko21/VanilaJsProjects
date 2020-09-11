export default function showChatList(users) {
  let friends = users.sort((a, b) => {
    return (
      a.lastMessage[0] - b.lastMessage[0] && a.lastMessage[1] - b.lastMessage[1]
    );
  });

  const allChatFriends = document.querySelector(".allChatFriends");
  allChatFriends.innerHTML = "";

  for (let item of friends) {
    let div = document.createElement("div");
    div.className = "chatFriend";
    div.setAttribute("profileID", item.id);
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
// showChatList(users)

// document.addEventListener("DOMContentLoaded", showChatList);
