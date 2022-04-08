const data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
const itemList = [];

export { data, itemList }