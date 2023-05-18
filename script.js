const apirym = async (page) => {
    let url = "https://rickandmortyapi.com/api/character/?page=1" + page;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#cardImage");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem = document.createElement("div");
        divItem.innerHTML = `
            <div class="card" >
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text"><b>Status: </b>${item.status}</p>
                    <p class="card-text-species"><b>Species: </b>${item.species}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        divRes.appendChild(divItem);
    });
}


apirym(1)