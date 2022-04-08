import { data, itemList } from "./data.js";
import { Item } from "./classItem.js";
export function addList(_content) {
    const id = data.length;
    const item = new Item(id, _content);
    data.push({id, content: _content});
    itemList.push(item);
    localStorage.setItem('data', JSON.stringify(data));
    // creando elemntos
    const list = document.querySelector('#list');
    const element = document.createElement('div');
    element.innerHTML = `
        <p>${_content}</p>
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
    list.appendChild(element);
}