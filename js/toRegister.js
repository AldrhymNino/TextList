import { data, itemList } from "./data.js";
import { Item } from "./classItem.js";
export const toRegister = (_id, _content, _mode) => {
    const item = new Item(_id, _content);
    const {id, content} = item;
    if(_mode === 'load') {
        itemList.push(item);
    }else if(_mode === 'add') {
        itemList.push(item);
        data.push({id, content});
        localStorage.setItem('data', JSON.stringify(data));
    }
};