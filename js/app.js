import "./load.js";
import { itemList } from "./data.js";
import { createItem } from "./createItem.js";
import { toRegister } from "./toRegister.js";

// DOM { list, input, submit, containerModal, modalInput, modalBtn }
const list = document.querySelector('#list');
const inputItem = document.querySelector('#input-item');
const btnSubmit = document.querySelector('#btn-submit');
const containerModal = document.querySelector('#container-modal');
const modalInput = document.querySelector('#modal_input');
const modalBtn = document.querySelector('#modal_btn');

// Events
function set() {
    const id = itemList.length;
    const element = createItem(id, content);
    toRegister(id, content);
    list.appendChild(element);
    inputItem.value = '';
}

btnSubmit.addEventListener('mousedown', _e => {
    const content = inputItem.value;
    if(content) {
        set();
    }else {
        inputItem.classList.add('error');
    }
});

inputItem.addEventListener('keyup', _e => {
    inputItem.classList.remove('error'); 
    if(_e.key === 'Enter') {
        const content = inputItem.value;
        if(content) {
            set();
        }else {
            inputItem.classList.add('error'); 
        }
    }
});

// Events { edit, remove }
list.addEventListener('mousedown', _e => {
    const target = _e.target;
    const parent = target.closest('.list_item');
    const id = parseInt(parent.id);
    if(target.classList.contains('btn-remove') || target.classList.contains('fa-trash-can')) {
        itemList.forEach(_e => _e.id === id ? _e.remove(parent) : null);
    }else if(target.classList.contains('btn-edit') || target.classList.contains('fa-pen')) {
        containerModal.classList.add('show');
        // Event edit
        modalInput.addEventListener('keyup', _e => {
            modalInput.classList.remove('error');
            if(_e.key === 'Enter') {
                const content = modalInput.value;
                if(content) {
                    itemList.forEach(_e => _e.id === id ? _e.edit(parent, content) : null);
                    modalInput.value = '';
                    containerModal.classList.remove('show');
                }else {
                    modalInput.classList.add('error');
                }
            }
        });
    }
});