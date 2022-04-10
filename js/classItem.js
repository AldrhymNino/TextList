import { data, itemList } from "./data.js";
export class Item {
    constructor(_id, _content) {
        this.id = _id;
        this.content = _content;
    }

    remove(_parent) {
        const list = document.getElementById('list');
        const index = data.findIndex(_e => _e.id === this.id);
        list.removeChild(_parent);
        data.splice(index, 1)
        itemList.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
    }

    edit(_parent, _content) {
        const list = document.getElementById('list');
        const p = _parent.querySelector('p');
        const index = data.findIndex(_e => _e.id === this.id);
        p.textContent = _content;
        data[index].content = _content;
        itemList[index].content = _content;
        localStorage.setItem('data', JSON.stringify(data));
    }
}