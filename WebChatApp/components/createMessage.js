export function showMyMessage(text) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let currentUserMessages = document.querySelector(".currentUserMessages");

  div.className = "myMessage";
  p.innerHTML = text;
  div.append(p)

  currentUserMessages.append(div);
  currentUserMessages.scrollTop = currentUserMessages.scrollHeight; //прокрутка вниз при отправке сообщения
}

export function showUserMessage(quantityMessages=0) {
  let currentUserMessages = document.querySelector(".currentUserMessages");
  
  for (let i = 0; i < quantityMessages; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus accusantium illum quod aspernatur totam! Dolor laudantium, ratione, assumenda quam distinctio ipsa eius error sapiente quo quia quis blanditiis molestiae.";
    div.className = "userMessage";
    div.append(p)
     
      currentUserMessages.append(div);
  }

}
