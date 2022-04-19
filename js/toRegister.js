import { data, itemList } from "./data.js";
import { Item } from "./classItem.js";
export const toRegister = (_id, _content) => {
    const item = new Item(_id, _content);
    itemList.push(item);
    data.push({id: _id, content: _content});
    localStorage.setItem('data', JSON.stringify(data));
};