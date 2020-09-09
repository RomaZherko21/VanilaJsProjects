export function showMyMessage(text) {
  let div = document.createElement("div");
  let currentUserMessages = document.querySelector(".currentUserMessages");

  div.className = "myMessage";
  div.innerHTML = text;

  currentUserMessages.append(div);
  currentUserMessages.scrollTop = currentUserMessages.scrollHeight; //прокрутка вниз при отправке сообщения
}


