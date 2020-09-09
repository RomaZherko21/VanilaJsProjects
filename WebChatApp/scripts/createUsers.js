const names = [
  "Anton Knoff",
  "Bill Krum",
  "Anna Sthesia",
  "Paul Molive",
  "Anna Mull",
  "Gail Forcewind",
  "Paige Turner",
  "Bob Frapples",
  "Walter Melon",
  "Nick R. Bocker",
  "Barb Ackue",
  "Buck Kinnear",
  "Greta Life",
  "Ira Membrit",
  "Shonda Leer",
  "Brock Lee",
  "Maya Didas",
];

let users = [];
function createUsers() {

  let id = 1;

  function randomDate(start, end) {
    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toString().split(' ');
    return [date[2], date[1]]
  }

  for (let item of names) {
    let obj = {
      name: item,
      userName:
        item.split(" ")[Math.round(Math.random())] +
        Math.round(Math.random().toFixed(2) * 100),
      avatar: `https://randomuser.me/api/portraits/${
        Math.round(Math.random()) ? "men" : "women"
      }/${names.indexOf(item)}.jpg`,
      messages: 5,
      lastMessage: randomDate(new Date(2020, 7, 0), new Date()),
      id: id++,
    };

    users.push(obj);
  }
  
}
createUsers();

export default users; 

