import "./load.js";
import { itemList } from "./data.js";
import { createItem } from "./createItem.js";
import { toRegister } from "./toRegister.js";

// DOM { input, submit }
const list = document.querySelector('#list');
const inputItem = document.querySelector('#input-item');
const btnSubmit = document.querySelector('#btn-submit');

// Events
btnSubmit.addEventListener('mousedown', _e => {
    const content = inputItem.value;
    if(content) {
        const id = itemList.length;
        const element = createItem(id, content);
        toRegister(id, content, 'add');
        list.appendChild(element);
        inputItem.value = '';
    }else {
        inputItem.classList.add('error');
    }
});

inputItem.addEventListener('keyup', _e => {
    if(_e.key === 'Enter') {
        const content = inputItem.value;
        if(content) {
            const id = itemList.length;
            const element = createItem(id, content);
            toRegister(id, content, 'add');
            list.appendChild(element);
            inputItem.value = '';
        }else {
            inputItem.classList.add('error'); 
        }
    }
});

inputItem.addEventListener('focus', _e => {
    inputItem.classList.remove('error');
});

list.addEventListener('mousedown', _e => {
    const target = _e.target;
    if(target.classList.contains('btn-remove') || target.classList.contains('fa-trash-can')) {
        const parent = target.closest('.list_item');
        const id = parseInt(parent.id);
        itemList.forEach(_e => _e.id === id ? _e.remove(parent) : null);
    }

    if(target.classList.contains('btn-edit') || target.classList.contains('fa-pen')) {
        console.log('Click!');
    }
});