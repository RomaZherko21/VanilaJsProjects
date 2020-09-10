let section = document.createElement("section");
section.className = "chatField";

let body = document.querySelector("body");
let preview = document.querySelector(".preview");

export default function showChatBox(user) {
  section.style.display = 'flex';

  preview.remove();
  body.append(section);
  section.innerHTML = `
    <div class="userInfo">
        <div class="currentUserInfo">
            <img src="${user.avatar}" alt="">
            <h2>${user.name}</h2>
        </div>
        <div class="icon">
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>

    <div class="currentUserMessages">
            <div class="lastMessageDate">
                ${user.lastMessage[0]}.${user.lastMessage[1]}
            </div>
    </div>
            <div class="newMessageInput" >
                <textarea id="messageArea" placeholder="Write message here!"></textarea>
                <div id="micro" class="icon">
                    <i class="fas fa-microphone"></i>
                </div>
            </div>`;
  if (document.documentElement.clientWidth <= 640) {
      let sidebar = document.querySelector(".sidebar");
      sidebar.style.display = "none";

      let currentUserInfo = document.querySelector(".currentUserInfo");
      let div = document.createElement('div');
      div.className = "icon";
      div.innerHTML = `<i class="fas fa-arrow-left"></i>`;

      currentUserInfo.prepend(div);

      div.addEventListener('click',()=>{
        sidebar.style.display = "flex";
        section.style.display = 'none';
      })

      const allChatFriends = document.querySelector(".allChatFriends");
      if(allChatFriends.querySelector('.clickUser')) allChatFriends.querySelector('.clickUser').classList.remove('clickUser');
  }
}
