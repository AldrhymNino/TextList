export function createItem(_id, _content) {
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
    element.setAttribute('id', _id);
    element.classList.add('list_item');
    return element;
}