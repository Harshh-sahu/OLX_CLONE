const mainGridTitle = document.querySelector(".favourites h1");
const mainGrid = document.querySelector(".favourites .movies-grid");

async function getItems() {
  const resp = await fetch("http://localhost:8089/medicine");
  let respData = await resp.json();
  console.log(respData);
  return respData;
}

async function addItemsToDOM() {
  const data = await getItems();
  mainGridTitle.innerText = "Items";

  let resultArr = data.map((item) => {
    return `
      <div class="card" data-id="${item.id}">
        <div class="img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="info">
          <h2>${item.name}</h2>
          <div class="single-info">
            <span>Price :</span>
            <span>${item.price}</span>
          </div>
          <div class="single-info">
            <span>Date :</span>
            <span>${item.date}</span>
          </div>
          <div class="single-info">
            <span>Rating :</span>
            <span>${item.rating}</span>
          </div>
        </div>
      </div>
    `;
  });

  mainGrid.innerHTML = resultArr.join(" ");
  const cards = document.querySelectorAll(".card");
}

addItemsToDOM();