// T3. JavaScript profesional en una aplicación web
// U1. Trabajo avanzado con el DOM
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:
function getItems(){
    const items = document.querySelectorAll(".js-item")
    return [...items].map(item =>({
        id: item.dataset.id,
        es: item.dataset.es,
        en: item.dataset.en,
    }))
}

function emptyList(){
    const list = document.querySelector(".js-list");
    list.innerHTML = "";
}

function renderList(itemList,lang){
    const list = document.querySelector(".js-list");
    emptyList();
    itemList.forEach(item => {
        list.innerHTML +=
        `<li class="js-item" data-id=${item.id} data-es="${item.es}" data-en="${item.en}">${item[lang]}</li>`
    });
}

function updateItemStyle(idItem){
    const item = document.querySelector(`.js-item[data-id="${idItem}"]`);

    if (item){
        item.classList.add("highlight")
    }

}

const words = getItems();

renderList(words,"en");
updateItemStyle(2);
updateItemStyle(4);