async function getData() {

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();

    const recipes = data.recipes;
    const result = recipes.map(function (ele) {
        return `
        <div class ="item">
        <h2>title : ${ele.title}</h2>
        <img src = "${ele.image_url}"/>
        </div>
        `;
    }).join('');
    document.querySelector(".pizza").innerHTML = result;
}
getData();