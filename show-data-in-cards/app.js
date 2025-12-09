const shop = {
  football: {
    title: "Football Collection",
    items: [
      {
        name: "Adidas Football",
        price: 4000,
        description: "Official size 5 training ball",
      },
      {
        name: "Nike Street Ball",
        price: 3500,
        description: "Durable for rough surfaces",
      },
    ],
  },
  mbappeJersey: {
    title: "Jersey Collection",
    items: [
      {
        name: "Real Madrid Jersey",
        price: 800,
        description: "Official 2025 home edition",
      },
      {
        name: "Spain National Jersey",
        price: 750,
        description: "World Cup special design",
      },
    ],
  },
  fullFieldToes: {
    title: "Full Field Toes",
    items: [
      {
        name: "Nike Mercurial",
        price: 12000,
        description: "Speed boots for professional players",
      },
      {
        name: "Adidas Predator",
        price: 11000,
        description: "Perfect grip and control",
      },
    ],
  },
};

let mainUIComp = document.getElementById("mainUIComp");

for (let key in shop) {
  let category = shop[key];

  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<h2>${category.title}</h2>`;

  category.items.forEach(function (item) {
    let itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML =
      "<b>" +
      item.name +
      "</b><br>" +
      item.price +
      " PKR<br>" +
      item.description;
    card.appendChild(itemDiv);
  });

  mainUIComp.appendChild(card);
}
