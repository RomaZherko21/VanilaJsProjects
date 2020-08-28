const userName = document.querySelector("#userName");
const userSection = document.querySelector("#showUser");

function changeInfo(data) {

userSection.style.display = "block";

  let name = document.querySelector("#name");
  let bio = document.querySelector("#bio");
  let location = document.querySelector("#location");
  let company = document.querySelector("#workPlace");
  let img = document.querySelector(".userPhoto");

  name.innerHTML = data.login;
  img.innerHTML = `<img src="${data.avatar_url}">`;
  bio.innerHTML = data.bio;
  location.innerHTML = data.location;
  company.innerHTML = data.company;
}

class GitHub {
  constructor() {
    this.client_id = "f87f791e3012f3924b6b";
    this.client_secret = "15656eee74dc31b6fcd74d4961c31fb842e5e01e";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return {
      profile: profileData,
    };
  }
}

let user = new GitHub();

userName.addEventListener("keyup", (event) => {
  currentUser = user.getUser(event.target.value);

  if (currentUser) {
    currentUser.then((data) => {
      if (data.profile.message == "Not Found") {
        console.log(`User - ${searchText} Not Found`);
      } else {
        changeInfo(data.profile);
      }
    });
  } else {
    clearProfile();
  }
});

function clearProfile() {
  userSection.style.display = "none";
}
