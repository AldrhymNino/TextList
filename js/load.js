import { data, itemList } from "./data.js";
import { Item } from "./classItem.js";
const load = (() => {
    if(data) {
        const frament = document.createDocumentFragment();
        const list = document.querySelector('#list');
        for(let i = 0, length = data.length; i < length; i++) {
            const current = data[i];
            const {id, content} = current;
            const item = new Item(id, content);
            itemList.push(item);
            // añadiendo elementos al DOM
            const element = document.createElement('div');
            element.innerHTML = `
                <p>${content}</p>
                <div class="div-btn">
                    <button class="btn btn-edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn btn-remove">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            element.setAttribute('id', id);
            element.classList.add('list_item');
            frament.appendChild(element);
        }
        list.appendChild(frament);
    }
})();