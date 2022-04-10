import { data } from "./data.js";
import { createItem } from "./createItem.js";
import { toRegister } from "./toRegister.js";
const load = (() => {
    if(data) {
        const frament = document.createDocumentFragment();
        const list = document.querySelector('#list');
        for(let i = 0, length = data.length; i < length; i++) {
            const current = data[i];
            const {id, content} = current;
            toRegister(id, content, 'load');
            // añadiendo elementos al DOM
            const element = createItem(id, content);
            frament.appendChild(element);
        }
        list.appendChild(frament);
    }
})();