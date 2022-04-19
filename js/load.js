import { data, itemList } from "./data.js";
import { createItem } from "./createItem.js";
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
            const element = createItem(id, content);
            frament.appendChild(element);
        }
        list.appendChild(frament);
    }
})();